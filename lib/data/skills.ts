// lib/data/skills.ts
import { Skill, SkillCategory } from '../types/skill';

export const skills: Skill[] = [
  // ML/DL
  { name: 'XGBoost', category: 'ML/DL', proficiency: 5 },
  { name: 'CatBoost', category: 'ML/DL', proficiency: 5 },
  { name: 'LightGBM', category: 'ML/DL', proficiency: 5 },
  { name: 'Random Forest', category: 'ML/DL', proficiency: 5 },
  { name: 'Logistic Regression', category: 'ML/DL', proficiency: 5 },
  { name: 'SVM', category: 'ML/DL', proficiency: 4 },
  { name: 'Gradient Boosting', category: 'ML/DL', proficiency: 5 },
  { name: 'Naive Bayes', category: 'ML/DL', proficiency: 4 },
  { name: 'K-Means', category: 'ML/DL', proficiency: 4 },
  { name: 'DBSCAN', category: 'ML/DL', proficiency: 4 },
  { name: 'Hierarchical Clustering', category: 'ML/DL', proficiency: 4 },
  { name: 'PyTorch', category: 'ML/DL', proficiency: 5 },
  { name: 'TensorFlow', category: 'ML/DL', proficiency: 5 },
  { name: 'Keras', category: 'ML/DL', proficiency: 5 },
  { name: 'Scikit-learn', category: 'ML/DL', proficiency: 5 },
  { name: 'SHAP', category: 'ML/DL', proficiency: 5 },
  { name: 'SMOTE', category: 'ML/DL', proficiency: 4 },
  { name: 'Imbalanced-learn', category: 'ML/DL', proficiency: 4 },

  // NLP
  { name: 'BERT', category: 'NLP', proficiency: 5 },
  { name: 'FinBERT', category: 'NLP', proficiency: 4 },
  { name: 'Transformers', category: 'NLP', proficiency: 5 },
  { name: 'Hugging Face', category: 'NLP', proficiency: 5 },
  { name: 'NLTK', category: 'NLP', proficiency: 5 },
  { name: 'spaCy', category: 'NLP', proficiency: 4 },
  { name: 'TF-IDF', category: 'NLP', proficiency: 5 },
  { name: 'Word2Vec', category: 'NLP', proficiency: 4 },
  { name: 'Named Entity Recognition', category: 'NLP', proficiency: 5 },
  { name: 'Sentiment Analysis', category: 'NLP', proficiency: 5 },
  { name: 'Text Classification', category: 'NLP', proficiency: 5 },

  // Computer Vision
  { name: 'ResNet', category: 'Computer Vision', proficiency: 5 },
  { name: 'EfficientNet', category: 'Computer Vision', proficiency: 4 },
  { name: 'DenseNet', category: 'Computer Vision', proficiency: 4 },
  { name: 'CNN', category: 'Computer Vision', proficiency: 5 },
  { name: 'Faster R-CNN', category: 'Computer Vision', proficiency: 4 },
  { name: 'Grad-CAM', category: 'Computer Vision', proficiency: 5 },
  { name: 'CLAHE', category: 'Computer Vision', proficiency: 4 },
  { name: 'Albumentations', category: 'Computer Vision', proficiency: 4 },
  { name: 'OpenCV', category: 'Computer Vision', proficiency: 5 },
  { name: 'Torchvision', category: 'Computer Vision', proficiency: 5 },
  { name: 'Image Classification', category: 'Computer Vision', proficiency: 5 },
  { name: 'Object Detection', category: 'Computer Vision', proficiency: 4 },
  { name: 'Transfer Learning', category: 'Computer Vision', proficiency: 5 },

  // Production/Deployment
  { name: 'FastAPI', category: 'Production/Deployment', proficiency: 5 },
  { name: 'Streamlit', category: 'Production/Deployment', proficiency: 5 },
  { name: 'Docker', category: 'Production/Deployment', proficiency: 4 },
  { name: 'Git', category: 'Production/Deployment', proficiency: 5 },
  { name: 'GitHub Actions', category: 'Production/Deployment', proficiency: 4 },
  { name: 'REST API', category: 'Production/Deployment', proficiency: 5 },
  { name: 'CI/CD', category: 'Production/Deployment', proficiency: 4 },
  { name: 'MLOps', category: 'Production/Deployment', proficiency: 4 },
  { name: 'Model Deployment', category: 'Production/Deployment', proficiency: 5 },
  { name: 'Uvicorn', category: 'Production/Deployment', proficiency: 4 },

  // Data Engineering
  { name: 'Pandas', category: 'Data Engineering', proficiency: 5 },
  { name: 'NumPy', category: 'Data Engineering', proficiency: 5 },
  { name: 'SQL', category: 'Data Engineering', proficiency: 5 },
  { name: 'PostgreSQL', category: 'Data Engineering', proficiency: 4 },
  { name: 'Data Preprocessing', category: 'Data Engineering', proficiency: 5 },
  { name: 'Feature Engineering', category: 'Data Engineering', proficiency: 5 },
  { name: 'ETL', category: 'Data Engineering', proficiency: 4 },
  { name: 'Data Visualization', category: 'Data Engineering', proficiency: 5 },
  { name: 'Plotly', category: 'Data Engineering', proficiency: 5 },
  { name: 'Matplotlib', category: 'Data Engineering', proficiency: 5 },
  { name: 'Seaborn', category: 'Data Engineering', proficiency: 5 },

  // Time Series & Forecasting
  { name: 'LSTM', category: 'ML/DL', proficiency: 5 },
  { name: 'Temporal Fusion Transformer', category: 'ML/DL', proficiency: 4 },
  { name: 'Prophet', category: 'ML/DL', proficiency: 5 },
  { name: 'Time Series Analysis', category: 'ML/DL', proficiency: 5 },
  { name: 'Multi-Horizon Forecasting', category: 'ML/DL', proficiency: 4 },

  // Specialized Domains
  { name: 'Financial AI', category: 'Domains', proficiency: 5 },
  { name: 'Healthcare AI', category: 'Domains', proficiency: 5 },
  { name: 'Retail Analytics', category: 'Domains', proficiency: 5 },
  { name: 'HR Analytics', category: 'Domains', proficiency: 4 },
  { name: 'Quantitative Finance', category: 'Domains', proficiency: 4 },
  { name: 'Medical Imaging', category: 'Domains', proficiency: 5 },
  { name: 'Fraud Detection', category: 'Domains', proficiency: 5 },
  { name: 'Customer Churn', category: 'Domains', proficiency: 5 },
  { name: 'Market Basket Analysis', category: 'Domains', proficiency: 5 },
  { name: 'Cost-Sensitive Learning', category: 'Domains', proficiency: 5 },
  { name: 'Explainable AI', category: 'Domains', proficiency: 5 },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'ML/DL',
    skills: [
      'XGBoost',
      'CatBoost',
      'LightGBM',
      'Random Forest',
      'Gradient Boosting',
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'LSTM',
      'Temporal Fusion Transformer',
      'Prophet',
      'SHAP',
      'SMOTE'
    ]
  },
  {
    category: 'NLP',
    skills: [
      'BERT',
      'FinBERT',
      'Transformers',
      'Hugging Face',
      'NLTK',
      'spaCy',
      'TF-IDF',
      'Named Entity Recognition',
      'Sentiment Analysis'
    ]
  },
  {
    category: 'Computer Vision',
    skills: [
      'ResNet',
      'EfficientNet',
      'DenseNet',
      'CNN',
      'Faster R-CNN',
      'Grad-CAM',
      'OpenCV',
      'Torchvision',
      'Transfer Learning'
    ]
  },
  {
    category: 'Production/Deployment',
    skills: [
      'FastAPI',
      'Streamlit',
      'Docker',
      'Git',
      'REST API',
      'CI/CD',
      'MLOps',
      'Model Deployment'
    ]
  },
  {
    category: 'Data Engineering',
    skills: [
      'Pandas',
      'NumPy',
      'SQL',
      'PostgreSQL',
      'Feature Engineering',
      'Data Preprocessing',
      'Plotly',
      'Matplotlib',
      'Seaborn'
    ]
  },
  {
    category: 'Domains',
    skills: [
      'Financial AI',
      'Healthcare AI',
      'Retail Analytics',
      'HR Analytics',
      'Fraud Detection',
      'Customer Churn',
      'Market Basket Analysis',
      'Cost-Sensitive Learning',
      'Explainable AI'
    ]
  }
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

// Helper function to get all unique categories
export const getAllCategories = (): string[] => {
  return Array.from(new Set(skills.map(skill => skill.category)));
};
