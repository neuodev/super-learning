import requests
import re
from textblob import TextBlob
# 3rd party 
import environ

env = environ.Env()
tweets_url = 'https://api.twitter.com/2/users/:id/tweets'
headers = {"Authorization": f"Bearer {env('TWITTER_BEARER_TOKEN')}"}

def get_user_tweets(id, token = None, max_results = 10):
    params = {
        'pagination_token': token,
        'max_results': max_results
    }
    url = f"https://api.twitter.com/2/users/{id}/tweets"
    return requests.get(url,params=params, headers=headers).json()

def get_user_details(username):
    url = f"https://api.twitter.com/2/users/by/username/{username}"
    return requests.get(url, params={'user.fields' : 'id,username,verified,profile_image_url'}, headers=headers).json()
    

def clean_tweets(tweets):
    """
    Remove Mentions, the "#" symbol, and Links
    Example:
    [input]: "@jone #python RT https://python.org hello world"
    [ouput]: "python  hello world"
    """

    cleaned_tweets = []
    for tweet in tweets:
        text = re.sub(r'@[A-Za-z0-9]+', '', tweet['text'])
        text = re.sub(r'#', '', text) # Remove the '#' symbol
        text = re.sub(r'RT[\s]+', '', text)
        text = re.sub(r'https?:\/\/\S+', '', text)
        cleaned_tweets.append(text)
    return cleaned_tweets


def analyse_tweets(tweets):
    analysed_tweets = []
    for tweet in tweets:
        subjectivity = TextBlob(tweet).sentiment.subjectivity
        polarity = TextBlob(tweet).sentiment.polarity
        analysis = 'Positive'
        if polarity < 0 :
            analysis = 'Negative'
        elif polarity == 0:
            analysis = 'Natural'

        analysed_tweets.append({
            'tweet': tweet,
            'subjectivity': subjectivity,
            'polarity': polarity,
            'analysis': analysis,
        })
    
    return analysed_tweets



def extreme_tweets(user_id):
    """
    From latest 100 tweet will get the most postive and negative one
    """
    tweets = get_user_tweets(user_id, max_results=100)
    cleaned_tweets = clean_tweets(tweets.get('data', []))
    analysed_tweets = analyse_tweets(cleaned_tweets)
    sorted_tweets = sorted(analysed_tweets,key=lambda t: t['polarity'], reverse=True)
    return {
        'most_postive': sorted_tweets[0],
        'most_negative': sorted_tweets[-1]
    }


def batch_tweets(user_id, number_of_tweets):
    all_tweets = []
    token = None
    api_calls = (int(number_of_tweets) // 100) or 1  
    for _ in range(api_calls):
        tweets = get_user_tweets(user_id,token=token,max_results=100)
        for tweet in tweets.get('data', []):
            all_tweets.append(tweet)
        
        # Get the next pagination token 
        token = tweets['meta'].get('next_token', None)
    
    return all_tweets
