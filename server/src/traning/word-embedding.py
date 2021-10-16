import gensim
import pandas as pd 

df = pd.read_json('../data/Cell_Phones_and_Accessories_5.json', lines=True)

review_text = df['reviewText'].apply(gensim.utils.simple_preprocess)

# Build the model 
model = gensim.models.Word2Vec(
    window=10,
    min_count=2,
    workers=4
)

model.build_vocab(review_text, progress_per=10)

model.train(
    review_text,
    total_examples=model.corpus_count,
    epochs=25
)
print('Model Trained')
model.save('../models/word-embedding/word2vec-amazon-reviews.model')
print('Model Saved')