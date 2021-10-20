from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

import requests

url = 'https://api.twitter.com/1.1/users/search.json'
config = {}
headers = {"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAJrnUwEAAAAA%2BYaGcXb28YZSZVVADaqoFuXw%2FEA%3Djk8aLEYbcmgDZyVzYzVj7r2ylyxbmIHQY4il8vs5xtyFjbHlyc"}
class UsersSearch(APIView):
    def get(self, request):
        query = request.query_params.get('q', None)
        page = request.query_params.get('page', 1)
        count = request.query_params.get('count', 1)
        if not query:
            return Response({ 'error': 'Query Param is required' }, status=400,)

        res = requests.get(url, params={'q': query, 'page': page, 'count': count}, headers=headers).json()
        users = []
        for user in res:
            users.append({
                'profile_image_url': user['profile_image_url'],
                'name': user['name'],
                'username': user['screen_name'],
                'verified': user['verified']
            })
        return Response(users)

"""
    {
        "id": 16122277,
        "id_str": "16122277",
        "name": "ELON",
        "screen_name": "elonrutberg",
        "location": "NY / LA / in between / ",
        "description": "narrative design / ideas@elonrutberg.com",
        "url": "https://t.co/PXd4Hwq6ZE",
        "entities": {
            "url": {
                "urls": [
                    {
                        "url": "https://t.co/PXd4Hwq6ZE",
                        "expanded_url": "http://elon.today",
                        "display_url": "elon.today",
                        "indices": [
                            0,
                            23
                        ]
                    }
                ]
            },
            "description": {
                "urls": []
            }
        },
        "protected": false,
        "followers_count": 8167,
        "friends_count": 1118,
        "listed_count": 62,
        "created_at": "Thu Sep 04 00:27:24 +0000 2008",
        "favourites_count": 4621,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": true,
        "statuses_count": 1769,
        "lang": null,
        "status": {
            "created_at": "Thu Oct 14 19:33:08 +0000 2021",
            "id": 1448733632198320145,
            "id_str": "1448733632198320145",
            "text": "https://t.co/Iu1lhNGcTK",
            "truncated": false,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 1448733624963112972,
                        "id_str": "1448733624963112972",
                        "indices": [
                            0,
                            23
                        ],
                        "media_url": "http://pbs.twimg.com/tweet_video_thumb/FBrvjmIXIAw8J2Y.jpg",
                        "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/FBrvjmIXIAw8J2Y.jpg",
                        "url": "https://t.co/Iu1lhNGcTK",
                        "display_url": "pic.twitter.com/Iu1lhNGcTK",
                        "expanded_url": "https://twitter.com/elonrutberg/status/1448733632198320145/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 640,
                                "h": 480,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 640,
                                "h": 480,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 640,
                                "h": 480,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 1448733624963112972,
                        "id_str": "1448733624963112972",
                        "indices": [
                            0,
                            23
                        ],
                        "media_url": "http://pbs.twimg.com/tweet_video_thumb/FBrvjmIXIAw8J2Y.jpg",
                        "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/FBrvjmIXIAw8J2Y.jpg",
                        "url": "https://t.co/Iu1lhNGcTK",
                        "display_url": "pic.twitter.com/Iu1lhNGcTK",
                        "expanded_url": "https://twitter.com/elonrutberg/status/1448733632198320145/photo/1",
                        "type": "animated_gif",
                        "sizes": {
                            "medium": {
                                "w": 640,
                                "h": 480,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 640,
                                "h": 480,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 640,
                                "h": 480,
                                "resize": "fit"
                            }
                        },
                        "video_info": {
                            "aspect_ratio": [
                                4,
                                3
                            ],
                            "variants": [
                                {
                                    "bitrate": 0,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/tweet_video/FBrvjmIXIAw8J2Y.mp4"
                                }
                            ]
                        }
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 8,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "BADFCD",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1023623502883160075/AqYdV1qR_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1023623502883160075/AqYdV1qR_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/16122277/1532885850",
        "profile_link_color": "1A3D33",
        "profile_sidebar_border_color": "F2E195",
        "profile_sidebar_fill_color": "FFF7CC",
        "profile_text_color": "0C3E53",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null,
        "translator_type": "none",
        "withheld_in_countries": []
    },
"""