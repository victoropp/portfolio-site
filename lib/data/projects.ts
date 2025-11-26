// lib/data/projects.ts
import { Project } from '../types/project';

export const projects: Project[] = [
  // ==================== FEATURED PROJECTS ====================
  {
    id: '1',
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    tagline: 'Real-time fraud detection using XGBoost and SHAP achieving 97% ROC-AUC and $131K savings per 100K transactions',

    domain: 'finance',
    industry: ['financial-services', 'e-commerce', 'fintech', 'healthcare', 'telecommunications'],

    keyMetric: {
      label: 'Net Savings',
      value: '$131K',
      context: 'per 100K transactions'
    },

    businessImpact: {
      roi: '5,000%+',
      savings: '$131K per 100K transactions',
      accuracy: '97% ROC-AUC',
      other: [
        { label: 'Fraud Detection Rate', value: '91%' },
        { label: 'False Positive Rate', value: '0.6%' },
        { label: 'Latency', value: '<100ms' }
      ]
    },

    techStack: ['XGBoost', 'SHAP', 'FastAPI', 'Streamlit', 'Docker', 'Python', 'Scikit-learn', 'Pandas'],
    modelType: 'Classification',

    overview: 'Production ML system detecting credit card fraud with 97% ROC-AUC, 91% recall, and <100ms latency. SHAP explanations provide transparency for regulatory compliance. Saves $131K per 100K transactions while minimizing customer friction.',

    challenge: '284,807 transactions with 492 frauds (0.172% - extreme class imbalance 577:1). Challenge: Catch frauds without annoying customers with false declines.',

    solution: 'XGBoost with scale_pos_weight optimization for class imbalance, SHAP for explainability and regulatory compliance, FastAPI for <100ms real-time inference, Docker deployment.',

    results: '97% ROC-AUC, 82% PR-AUC, 91% fraud detection rate (156/172 frauds caught), 0.6% false positive rate, $131K net savings per 100K transactions, <100ms latency.',

    thumbnail: '/projects/credit-fraud/thumbnail.webp',
    images: [
      '/projects/credit-fraud/demo-1.webp',
      '/projects/credit-fraud/confusion-matrix.png',
      '/projects/credit-fraud/shap-summary.png',
      '/projects/credit-fraud/roc-curve.png'
    ],

    demoUrl: 'https://credit-fraud-detection.streamlit.app',
    githubUrl: 'https://github.com/victoropp/credit-card-fraud-detection',

    seo: {
      metaTitle: 'Credit Card Fraud Detection - 97% ROC-AUC, $131K Savings | Victor Oppon',
      metaDescription: 'Production ML system detecting credit card fraud with 97% ROC-AUC, 91% recall. XGBoost, SHAP explainability, FastAPI deployment. $131K savings per 100K transactions.',
      keywords: [
        'credit card fraud detection',
        'machine learning fraud prevention',
        'XGBoost fraud detection',
        'SHAP explainability',
        'production ML system',
        'real-time fraud detection',
        'data scientist portfolio'
      ]
    },

    featured: true,
    order: 1,
    date: '2024-11-24'
  },

  {
    id: '2',
    slug: 'covid-xray-classification',
    title: 'COVID-19 X-ray Classification',
    tagline: 'Deep learning for medical imaging with 92% ROC-AUC and Grad-CAM explainability for clinical decision support',

    domain: 'healthcare',
    industry: ['hospitals', 'radiology', 'telemedicine', 'public-health', 'clinical-research'],

    keyMetric: {
      label: 'ROC-AUC',
      value: '92.1%',
      context: 'Multi-class COVID-19 detection'
    },

    businessImpact: {
      roi: '$1.05M per year',
      savings: '$700K per radiology department',
      accuracy: '68.7% overall, 92.1% ROC-AUC',
      other: [
        { label: 'COVID-19 Sensitivity', value: '67.0%' },
        { label: 'Time Savings', value: '90% (5 min → 30 sec)' },
        { label: 'Throughput Increase', value: '+60% (250 → 400 studies/day)' }
      ]
    },

    techStack: ['PyTorch', 'ResNet50', 'EfficientNet', 'DenseNet', 'Grad-CAM', 'CLAHE', 'Streamlit', 'Albumentations'],
    modelType: 'Multi-class Classification',

    overview: 'State-of-the-art deep learning system classifying chest X-rays into COVID-19, Viral Pneumonia, Lung Opacity, and Normal with 92.1% ROC-AUC. Grad-CAM visualizations provide clinical explainability. Designed for emergency department triage and radiology workflow optimization.',

    challenge: '21,165 chest X-rays across 4 classes with class imbalance (48% Normal, 28% Lung Opacity, 17% COVID-19, 6% Viral Pneumonia). Need high sensitivity for COVID-19 detection while maintaining trust with radiologists.',

    solution: 'Transfer learning with ResNet50 on ImageNet weights, CLAHE preprocessing for enhanced contrast, weighted cross-entropy for class imbalance, Grad-CAM for visual explainability, comprehensive clinical metrics (sensitivity, specificity, PPV, NPV).',

    results: '68.7% overall accuracy, 92.1% ROC-AUC (macro), 67% COVID-19 sensitivity, 91% Viral Pneumonia sensitivity, <30 sec inference time, visual heatmaps showing model attention on lung regions.',

    thumbnail: '/projects/covid-xray/thumbnail.webp',
    images: [
      '/projects/covid-xray/demo-1.webp',
      '/projects/covid-xray/confusion-matrix.png',
      '/projects/covid-xray/gradcam-examples.png',
      '/projects/covid-xray/roc-curves.png'
    ],

    githubUrl: 'https://github.com/victoropp/covid-xray-classification',

    seo: {
      metaTitle: 'COVID-19 X-ray Classification - 92% ROC-AUC, Deep Learning | Victor Oppon',
      metaDescription: 'Deep learning system for COVID-19 detection from chest X-rays with 92% ROC-AUC. PyTorch, ResNet50, Grad-CAM explainability for clinical decision support.',
      keywords: [
        'COVID-19 detection',
        'medical imaging deep learning',
        'chest X-ray classification',
        'PyTorch medical AI',
        'Grad-CAM explainability',
        'healthcare AI',
        'computer vision portfolio'
      ]
    },

    featured: true,
    order: 2,
    date: '2024-11-24'
  },

  {
    id: '3',
    slug: 'customer-churn-prediction',
    title: 'E-Commerce Customer Churn Prediction',
    tagline: 'Cost-optimized machine learning with 98% ROC-AUC and 60% cost reduction through threshold optimization',

    domain: 'retail',
    industry: ['e-commerce', 'saas', 'telecom', 'banking', 'streaming-services'],

    keyMetric: {
      label: 'ROC-AUC',
      value: '98.1%',
      context: 'Industry-leading prediction accuracy'
    },

    businessImpact: {
      roi: '151%',
      savings: '$200K-$500K annually',
      accuracy: '98.1% ROC-AUC',
      other: [
        { label: 'Recall', value: '99.3%' },
        { label: 'Cost Reduction', value: '60% vs default threshold' },
        { label: 'Customers Saved', value: '70 (from test set)' }
      ]
    },

    techStack: ['CatBoost', 'XGBoost', 'LightGBM', 'SMOTE', 'SHAP', 'Streamlit', 'FastAPI', 'Scikit-learn'],
    modelType: 'Classification',

    overview: 'Production-grade churn prediction with 98.1% ROC-AUC and 99.3% recall. Cost-sensitive learning with custom threshold optimization (0.14 vs default 0.5) reduces business costs by 60%. Only 1 churner missed out of 142 in test set.',

    challenge: '5,630 customers with 16.8% churn rate (class imbalance). Need to maximize recall to catch at-risk customers while balancing false positive costs. Business cost: losing a customer is 10x more expensive than retention campaign.',

    solution: 'CatBoost with SMOTE oversampling, 10+ engineered features (EngagementScore, RecencyRisk, AvgOrderValue), cost-sensitive threshold optimization with 10:1 FN:FP ratio, SHAP explainability for transparency.',

    results: '98.1% ROC-AUC, 99.3% recall (only 1 churner missed), 50.5% precision, 60% cost reduction vs default threshold, $42K net benefit on test set, 151% ROI.',

    thumbnail: '/projects/customer-churn/thumbnail.webp',
    images: [
      '/projects/customer-churn/demo-1.webp',
      '/projects/customer-churn/confusion-matrix.png',
      '/projects/customer-churn/shap-summary.png',
      '/projects/customer-churn/model-comparison.png'
    ],

    githubUrl: 'https://github.com/victoropp/customer-churn-prediction',

    seo: {
      metaTitle: 'Customer Churn Prediction - 98% ROC-AUC, Cost-Optimized | Victor Oppon',
      metaDescription: 'E-commerce churn prediction with 98% ROC-AUC, 99% recall. CatBoost, cost-sensitive learning, SHAP explainability. 60% cost reduction through threshold optimization.',
      keywords: [
        'customer churn prediction',
        'e-commerce machine learning',
        'cost-sensitive learning',
        'CatBoost churn model',
        'SHAP explainability',
        'threshold optimization',
        'data scientist portfolio'
      ]
    },

    featured: true,
    order: 3,
    date: '2024-11-24'
  },

  {
    id: '4',
    slug: 'financial-sentiment-analysis',
    title: 'Financial Sentiment Analysis',
    tagline: 'NLP platform with BERT-MPNet achieving 81% accuracy on 4,846 expert-annotated financial sentences',

    domain: 'nlp',
    industry: ['financial-services', 'fintech', 'trading', 'investment-research', 'market-intelligence'],

    keyMetric: {
      label: 'Accuracy',
      value: '81.2%',
      context: 'BERT-MPNet on financial news'
    },

    businessImpact: {
      roi: 'Market intelligence automation',
      accuracy: '81.16% accuracy (BERT-MPNet)',
      other: [
        { label: 'F1-Score', value: '81.31%' },
        { label: 'XGBoost Accuracy', value: '74.41%' },
        { label: 'Inference Speed', value: 'Real-time' }
      ]
    },

    techStack: ['BERT', 'sentence-transformers', 'XGBoost', 'Random Forest', 'SVM', 'TF-IDF', 'Transformers', 'Streamlit', 'FastAPI'],
    modelType: 'Multi-class Classification (NLP)',

    overview: 'Production-ready financial sentiment analysis platform with Transformer models (BERT-MPNet, MiniLM) and Traditional ML (XGBoost, Random Forest, SVM, Logistic Regression). Real-time sentiment classification with confidence scores across 4,846 expert-annotated financial news sentences.',

    challenge: '4,846 financial sentences across 3 classes (Positive: 28%, Neutral: 59%, Negative: 13%). Need domain-specific understanding of financial language and real-time inference for market intelligence.',

    solution: 'BERT-MPNet embeddings with Logistic Regression classifier for best accuracy, XGBoost with TF-IDF features (5,000 max features, 1-3 n-grams) as traditional ML baseline, class-weighted loss functions, interactive Streamlit dashboard with batch processing.',

    results: 'BERT-MPNet: 81.16% accuracy, 81.31% F1-score. XGBoost: 74.41% accuracy, 74.22% F1-score. 6 models compared with comprehensive evaluation. Real-time predictions via Streamlit dashboard.',

    thumbnail: '/projects/financial-sentiment/thumbnail.webp',
    images: [
      '/projects/financial-sentiment/demo-1.webp',
      '/projects/financial-sentiment/confusion-matrix.png',
      '/projects/financial-sentiment/model-comparison.png'
    ],

    githubUrl: 'https://github.com/victoropp/financial-sentiment-analysis',

    seo: {
      metaTitle: 'Financial Sentiment Analysis - 81% Accuracy, BERT & XGBoost | Victor Oppon',
      metaDescription: 'Financial NLP platform with BERT-MPNet achieving 81% accuracy. Real-time sentiment classification on 4,846 expert-annotated financial news sentences.',
      keywords: [
        'financial sentiment analysis',
        'BERT financial NLP',
        'sentence-transformers',
        'XGBoost NLP',
        'financial news classification',
        'market sentiment analysis',
        'NLP portfolio'
      ]
    },

    featured: true,
    order: 4,
    date: '2024-11-24'
  },

  // ==================== OTHER PROJECTS ====================

  {
    id: '5',
    slug: 'market-basket-analytics',
    title: 'Market Basket Analytics',
    tagline: 'Association rule mining and customer segmentation with 105K+ rules generating 20-35% increase in average order value',

    domain: 'retail',
    industry: ['retail', 'e-commerce', 'grocery', 'pharmacy', 'restaurant'],

    keyMetric: {
      label: 'AOV Increase',
      value: '20-35%',
      context: 'through intelligent cross-sell'
    },

    businessImpact: {
      roi: '$2.4M+ additional revenue',
      savings: '30-40% bundle sales improvement',
      other: [
        { label: 'Basket Size Increase', value: '15-25%' },
        { label: 'Frequent Itemsets', value: '2,108' },
        { label: 'Association Rules', value: '105,849' }
      ]
    },

    techStack: ['FP-Growth', 'Apriori', 'K-Means', 'RFM Analysis', 'Streamlit', 'MLxtend', 'Pandas'],
    modelType: 'Association Rule Mining & Clustering',

    overview: 'Production-grade market basket analysis using FP-Growth algorithm with 522K transactions, 4,185 products across 30 countries. RFM-based customer segmentation with CLV estimation and intelligent product recommendations.',

    challenge: '522K transactions with 97.84% sparsity. Need to balance rule coverage (avoiding long-tail products with no recommendations) with computational efficiency. Initial Apriori approach left 93% of products without rules.',

    solution: 'Optimized FP-Growth with 0.5% support (25x more rules than initial approach), popularity-based fallback for long-tail products, RFM analysis with K-Means clustering (6 segments), network visualization of product relationships.',

    results: '105,849 association rules (vs 4,072 initial), 100% recommendation availability, 20-35% AOV increase, 15-25% basket size boost, 6 customer segments with tailored strategies.',

    thumbnail: '/projects/market-basket/thumbnail.webp',
    images: [
      '/projects/market-basket/demo-1.webp',
      '/projects/market-basket/network-graph.png',
      '/projects/market-basket/customer-segments.png'
    ],

    githubUrl: 'https://github.com/victoropp/market-basket-analytics',

    seo: {
      metaTitle: 'Market Basket Analytics - 20-35% AOV Increase | Victor Oppon',
      metaDescription: 'Association rule mining with FP-Growth and customer segmentation. 105K+ rules generating 20-35% increase in average order value across retail industries.',
      keywords: [
        'market basket analysis',
        'association rule mining',
        'FP-Growth algorithm',
        'customer segmentation',
        'RFM analysis',
        'retail analytics',
        'cross-sell optimization'
      ]
    },

    featured: false,
    order: 5,
    date: '2024-11-24'
  },

  {
    id: '6',
    slug: 'stock-market-intelligence',
    title: 'Stock Market Intelligence Platform',
    tagline: 'LSTM deep learning and technical analysis platform with 98.33% prediction accuracy across 7,195 US stocks',

    domain: 'finance',
    industry: ['trading', 'investment-management', 'wealth-management', 'algorithmic-trading'],

    keyMetric: {
      label: 'Prediction Accuracy',
      value: '98.33%',
      context: 'MSFT stock forecasting'
    },

    businessImpact: {
      roi: 'Algorithmic trading signals',
      accuracy: '97.20% average across 7 stocks',
      other: [
        { label: 'MSFT MAPE', value: '1.67%' },
        { label: 'GOOGL Accuracy', value: '98.09%' },
        { label: 'Stocks Covered', value: '7,195+' }
      ]
    },

    techStack: ['LSTM', 'TensorFlow', 'Keras', 'TA-Lib', 'Streamlit', 'PyPortfolioOpt', 'Plotly'],
    modelType: 'Time Series Forecasting',

    overview: 'Enterprise-grade quantitative trading platform combining LSTM deep learning with 50+ technical indicators (RSI, MACD, Bollinger Bands) and algorithmic backtesting engine for systematic strategy development.',

    challenge: '7,195+ stocks with daily OHLCV data from 1984-2017. Need multi-horizon forecasting with uncertainty quantification, real-time technical analysis, and portfolio optimization with risk metrics.',

    solution: '2-layer LSTM (50 units each) with dropout, 60-day lookback windows, 20 epochs training, 50+ technical indicators via TA-Lib, event-driven backtesting engine, Sharpe ratio and max drawdown analysis.',

    results: '98.33% accuracy (MSFT), 1.67% MAPE, 97.20% average accuracy across 7 models (AAPL, MSFT, GOOGL, AMZN, TSLA, NVDA, FB), real-time market scanner, strategy backtester with risk metrics.',

    thumbnail: '/projects/stock-market/thumbnail.webp',
    images: [
      '/projects/stock-market/demo-1.webp',
      '/projects/stock-market/predictions.png',
      '/projects/stock-market/technical-indicators.png'
    ],

    githubUrl: 'https://github.com/victoropp/stock-market-intelligence',

    seo: {
      metaTitle: 'Stock Market Intelligence - 98% Accuracy, LSTM Forecasting | Victor Oppon',
      metaDescription: 'LSTM deep learning platform for stock price forecasting with 98% accuracy. Technical analysis, backtesting, and algorithmic trading signals across 7,195 stocks.',
      keywords: [
        'stock price prediction',
        'LSTM time series',
        'technical analysis',
        'algorithmic trading',
        'quantitative finance',
        'deep learning finance',
        'portfolio optimization'
      ]
    },

    featured: false,
    order: 6,
    date: '2024-11-24'
  },

  {
    id: '7',
    slug: 'retail-vision-analytics',
    title: 'Retail Vision Analytics',
    tagline: 'Computer vision for fashion retail with 92% accuracy achieving 90% reduction in manual data entry time',

    domain: 'cv',
    industry: ['fashion', 'e-commerce', 'warehouse-management', 'quality-control'],

    keyMetric: {
      label: 'Time Reduction',
      value: '90%',
      context: 'in manual product tagging'
    },

    businessImpact: {
      roi: 'Real-time inventory visibility',
      accuracy: '92.27%',
      other: [
        { label: 'Precision', value: '0.92' },
        { label: 'Recall', value: '0.92' },
        { label: 'Categories', value: '10 fashion items' }
      ]
    },

    techStack: ['PyTorch', 'CNN', 'Fashion MNIST', 'Streamlit', 'Batch Normalization', 'Dropout'],
    modelType: 'Image Classification',

    overview: 'Production-grade computer vision platform for automated fashion inventory tagging with 92.27% accuracy. Custom CNN with batch normalization and dropout for robust classification across 10 fashion categories.',

    challenge: 'Fashion MNIST dataset with 10 categories (T-shirt, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, Ankle boot). Need automated tagging to reduce manual data entry while maintaining high accuracy for inventory management.',

    solution: 'Custom CNN with 3 convolutional blocks, batch normalization for training stability, dropout regularization, embedding layer for similarity search, real-time inference dashboard.',

    results: '92.27% test accuracy, 0.92 precision and recall, 90% reduction in manual tagging time, real-time inventory visibility, trend analysis capabilities.',

    thumbnail: '/projects/retail-vision/thumbnail.webp',
    images: [
      '/projects/retail-vision/demo-1.webp',
      '/projects/retail-vision/confusion-matrix.png',
      '/projects/retail-vision/roc-curves.png'
    ],

    githubUrl: 'https://github.com/victoropp/retail-vision-analytics',

    seo: {
      metaTitle: 'Retail Vision Analytics - 92% Accuracy, Fashion AI | Victor Oppon',
      metaDescription: 'Computer vision for automated fashion inventory tagging with 92% accuracy. PyTorch CNN achieving 90% reduction in manual data entry time.',
      keywords: [
        'fashion classification',
        'computer vision retail',
        'automated tagging',
        'PyTorch CNN',
        'inventory management AI',
        'Fashion MNIST',
        'image classification portfolio'
      ]
    },

    featured: false,
    order: 7,
    date: '2024-11-24'
  },

  {
    id: '8',
    slug: 'job-change-prediction',
    title: 'Job Change Prediction (HR Analytics)',
    tagline: 'Cost-optimized HR analytics with 79.7% ROC-AUC and 20% cost reduction through business-aligned ML',

    domain: 'hr',
    industry: ['hr-analytics', 'recruitment', 'talent-management', 'workforce-planning'],

    keyMetric: {
      label: 'Cost Reduction',
      value: '20%',
      context: 'vs default threshold'
    },

    businessImpact: {
      roi: 'Retention program optimization',
      accuracy: '79.7% ROC-AUC',
      other: [
        { label: 'Recall', value: '77% (optimized threshold)' },
        { label: 'Business Cost', value: '0.483 (lowest)' },
        { label: 'Employees Analyzed', value: '19,158' }
      ]
    },

    techStack: ['LightGBM', 'CatBoost', 'XGBoost', 'SHAP', 'Streamlit', 'FastAPI', 'Cost-Sensitive Learning'],
    modelType: 'Classification',

    overview: 'Production-ready HR analytics platform with 6 ensemble models predicting employee job changes using cost-sensitive learning. Custom threshold optimization (0.40 vs 0.5) reduces business costs by 20% with 77% recall.',

    challenge: '19,158 data professionals with 25% looking for job change. Need to balance false negatives (losing high-value employees) vs false positives (unnecessary retention campaigns). FN cost is 5x FP cost.',

    solution: 'LightGBM with custom cost optimizer (5:1 FN:FP ratio), ordinal encoding, median imputation, threshold optimization, SHAP explainability, multi-page Streamlit dashboard.',

    results: '79.7% ROC-AUC, 77% recall with optimal threshold (0.40), 20% cost reduction vs default, 47.4% precision, lowest business cost (0.483) among 6 models.',

    thumbnail: '/projects/job-change/thumbnail.webp',
    images: [
      '/projects/job-change/demo-1.webp',
      '/projects/job-change/confusion-matrix.png',
      '/projects/job-change/shap-summary.png',
      '/projects/job-change/model-comparison.png'
    ],

    githubUrl: 'https://github.com/victoropp/job-change-prediction',

    seo: {
      metaTitle: 'Job Change Prediction - 79.7% ROC-AUC, Cost-Optimized HR Analytics | Victor Oppon',
      metaDescription: 'HR analytics platform predicting employee job changes with 79.7% ROC-AUC. LightGBM, cost-sensitive learning, SHAP explainability. 20% cost reduction.',
      keywords: [
        'HR analytics',
        'employee turnover prediction',
        'job change prediction',
        'cost-sensitive learning',
        'LightGBM HR',
        'SHAP explainability',
        'workforce analytics'
      ]
    },

    featured: false,
    order: 8,
    date: '2024-11-24'
  },

  {
    id: '9',
    slug: 'enterprise-ner-intelligence',
    title: 'Enterprise NER Intelligence (CoNLL-2003)',
    tagline: 'Named Entity Recognition with BERT achieving 92% F1-score for financial, legal, and healthcare applications',

    domain: 'nlp',
    industry: ['finance', 'legal', 'healthcare', 'hr-recruitment'],

    keyMetric: {
      label: 'F1-Score',
      value: '92%',
      context: 'BERT-Base on CoNLL-2003'
    },

    businessImpact: {
      roi: 'Document automation',
      accuracy: '91% precision, 93% recall',
      other: [
        { label: 'BERT vs Bi-LSTM', value: '92% vs 65%' },
        { label: 'Entity Types', value: 'PER, ORG, LOC, MISC' },
        { label: 'Confidence Scoring', value: 'Probabilistic outputs' }
      ]
    },

    techStack: ['BERT', 'Transformers', 'Bi-LSTM-CRF', 'TensorFlow', 'Streamlit', 'CoNLL-2003'],
    modelType: 'Sequence Labeling (NER)',

    overview: 'Production-ready Named Entity Recognition system with BERT Transformers and Bi-LSTM-CRF for extracting structured insights from unstructured text. Industry-specific modules for finance, legal, healthcare, and HR.',

    challenge: 'CoNLL-2003 dataset with complex entity boundaries and nested entities. Need high accuracy on out-of-vocabulary words, real-time inference, and confidence scoring for risk-adjusted decisions.',

    solution: 'BERT-Base-Cased for state-of-the-art accuracy, Bi-LSTM-CRF for resource-constrained environments, custom CRF layer in TensorFlow, industry-specific pre-configured modules, interactive Streamlit dashboard.',

    results: 'BERT: 92% F1 (91% precision, 93% recall), Bi-LSTM-CRF: 65% F1, handles OOV words, real-time inference, confidence scoring, multi-industry applications.',

    thumbnail: '/projects/enterprise-ner/thumbnail.webp',
    images: [
      '/projects/enterprise-ner/demo-1.webp',
      '/projects/enterprise-ner/entity-examples.png',
      '/projects/enterprise-ner/model-comparison.png'
    ],

    githubUrl: 'https://github.com/victoropp/enterprise-ner-intelligence',

    seo: {
      metaTitle: 'Enterprise NER Intelligence - 92% F1, BERT NLP | Victor Oppon',
      metaDescription: 'Named Entity Recognition with BERT achieving 92% F1-score on CoNLL-2003. Financial, legal, and healthcare applications with real-time inference.',
      keywords: [
        'named entity recognition',
        'BERT NER',
        'CoNLL-2003',
        'Bi-LSTM-CRF',
        'financial NLP',
        'legal document processing',
        'healthcare NER'
      ]
    },

    featured: false,
    order: 9,
    date: '2024-11-24'
  },

  {
    id: '10',
    slug: 'sp500-forecasting',
    title: 'S&P 500 Intelligent Forecasting',
    tagline: 'Time series forecasting and portfolio optimization with Prophet and Modern Portfolio Theory for S&P 500',

    domain: 'finance',
    industry: ['wealth-management', 'institutional-investing', 'algorithmic-trading', 'market-research'],

    keyMetric: {
      label: 'Forecast Horizon',
      value: '90 days',
      context: 'with confidence intervals'
    },

    businessImpact: {
      roi: 'Portfolio optimization',
      other: [
        { label: 'Efficient Frontier', value: 'Risk-return optimization' },
        { label: 'Sharpe Ratio', value: 'Maximization' },
        { label: 'Rebalancing', value: 'Quarterly recommended' }
      ]
    },

    techStack: ['Prophet', 'PyPortfolioOpt', 'Modern Portfolio Theory', 'Streamlit', 'yfinance', 'Plotly'],
    modelType: 'Time Series Forecasting & Optimization',

    overview: 'Advanced financial analytics platform combining Meta Prophet for S&P 500 forecasting with Modern Portfolio Theory for optimal asset allocation. Interactive dashboard with efficient frontier visualization.',

    challenge: 'S&P 500 index forecasting with 90-day horizon and uncertainty quantification. Need portfolio optimization across 503 constituents with risk-adjusted returns and quarterly rebalancing.',

    solution: 'Prophet model with additive seasonality, 90-day forecast horizon, 80% confidence intervals, mean-variance optimization (Markowitz), Sharpe ratio maximization, no short-selling constraints.',

    results: '90-day S&P 500 predictions with confidence bands, efficient frontier visualization, max Sharpe ratio portfolios, risk-return tradeoff analysis, real-time data integration via Yahoo Finance.',

    thumbnail: '/projects/sp500-forecasting/thumbnail.webp',
    images: [
      '/projects/sp500-forecasting/demo-1.webp',
      '/projects/sp500-forecasting/forecast.png',
      '/projects/sp500-forecasting/efficient-frontier.png'
    ],

    githubUrl: 'https://github.com/victoropp/sp500-forecasting',

    seo: {
      metaTitle: 'S&P 500 Forecasting - Prophet & Portfolio Optimization | Victor Oppon',
      metaDescription: 'Time series forecasting with Prophet and Modern Portfolio Theory for S&P 500. 90-day predictions, efficient frontier, Sharpe ratio optimization.',
      keywords: [
        'S&P 500 forecasting',
        'Prophet time series',
        'Modern Portfolio Theory',
        'efficient frontier',
        'Sharpe ratio optimization',
        'portfolio optimization',
        'quantitative finance'
      ]
    },

    featured: false,
    order: 10,
    date: '2024-11-24'
  },

  {
    id: '11',
    slug: 'twitter-sentiment-analysis',
    title: 'Twitter Sentiment Analysis',
    tagline: 'NLP platform with 88.3% ROC-AUC analyzing 400K tweets for brand monitoring and market intelligence',

    domain: 'nlp',
    industry: ['brand-monitoring', 'customer-service', 'market-research', 'crisis-management'],

    keyMetric: {
      label: 'ROC-AUC',
      value: '88.3%',
      context: 'on 400K balanced tweets'
    },

    businessImpact: {
      roi: '$200K-$500K annual savings',
      other: [
        { label: 'Accuracy', value: '80.3%' },
        { label: 'Training Time', value: '<5 minutes' },
        { label: 'Response Time Reduction', value: '24h → 2h (92%)' }
      ]
    },

    techStack: ['Logistic Regression', 'SVM', 'Naive Bayes', 'Random Forest', 'PyTorch', 'LSTM', 'TF-IDF', 'Streamlit'],
    modelType: 'Binary Classification (NLP)',

    overview: 'Production-grade sentiment analysis platform with multiple ML approaches (traditional + deep learning) classifying tweet sentiment with 88.3% ROC-AUC. Real-time predictions with confidence scores for brand monitoring.',

    challenge: 'Sentiment140 dataset: 400K tweets (sampled from 1.6M) with balanced positive/negative classes. Need real-time inference for 100K+ tweets/day, high accuracy for crisis detection, and batch processing support.',

    solution: 'Logistic Regression with TF-IDF features (best performer), text preprocessing (URLs, mentions, hashtags removal), 4 traditional ML models + 2 deep learning architectures, interactive dashboard with word clouds.',

    results: 'Logistic Regression: 80.3% accuracy, 88.3% ROC-AUC, 4.2s training time. Balanced precision (79.7%) and recall (81.3%). Real-time predictions, batch processing, word cloud visualizations.',

    thumbnail: '/projects/twitter-sentiment/thumbnail.webp',
    images: [
      '/projects/twitter-sentiment/demo-1.webp',
      '/projects/twitter-sentiment/confusion-matrix.png',
      '/projects/twitter-sentiment/wordclouds.png'
    ],

    githubUrl: 'https://github.com/victoropp/twitter-sentiment-analysis',

    seo: {
      metaTitle: 'Twitter Sentiment Analysis - 88% ROC-AUC, Brand Monitoring | Victor Oppon',
      metaDescription: 'Sentiment analysis platform analyzing 400K tweets with 88% ROC-AUC. Logistic Regression, SVM, LSTM for brand monitoring and market intelligence.',
      keywords: [
        'Twitter sentiment analysis',
        'social media NLP',
        'brand monitoring',
        'sentiment classification',
        'TF-IDF NLP',
        'crisis detection',
        'market intelligence'
      ]
    },

    featured: false,
    order: 11,
    date: '2024-11-24'
  },

  {
    id: '12',
    slug: 'retail-sales-forecasting',
    title: 'Retail Sales Forecasting',
    tagline: 'LightGBM achieving 13.5% WAPE for 16-day forecasting across 54 stores with 56 engineered features',

    domain: 'retail',
    industry: ['grocery', 'retail', 'supply-chain', 'inventory-management'],

    keyMetric: {
      label: 'WAPE',
      value: '13.5%',
      context: '16-day ahead forecasts'
    },

    businessImpact: {
      roi: '$500K+ annual savings',
      other: [
        { label: 'Inventory Waste Reduction', value: '15-20%' },
        { label: 'Stockout Reduction', value: '25-30%' },
        { label: 'Labor Efficiency', value: '10-15% improvement' }
      ]
    },

    techStack: ['LightGBM', 'XGBoost', 'Streamlit', 'Plotly', 'Scikit-learn', 'Pandas'],
    modelType: 'Multi-Horizon Time Series Forecasting',

    overview: 'Production-grade forecasting platform using LightGBM for Ecuadorian grocery retailer with 54 stores and 33 product families. 16-day predictions with 56 engineered features and interactive Streamlit dashboard.',

    challenge: '3M+ training records (2013-2017) across 54 stores and 33 product families. Need 16-day forecasts with 56 engineered features (temporal, lag, rolling, external) and proper time series validation.',

    solution: 'LightGBM gradient boosting with 56 features (oil prices, holidays, transactions, promotions, lag, rolling statistics), time series cross-validation, early stopping, comprehensive evaluation metrics.',

    results: 'LightGBM: 13.53% WAPE (industry-excellent), RMSE 211.84, MAE 64.02. XGBoost: 13.91% WAPE. Interactive dashboard with ROI calculator, feature importance analysis.',

    thumbnail: '/projects/retail-forecasting/thumbnail.webp',
    images: [
      '/projects/retail-forecasting/demo-1.webp',
      '/projects/retail-forecasting/forecast-plot.png',
      '/projects/retail-forecasting/feature-importance.png'
    ],

    githubUrl: 'https://github.com/victoropp/retail-sales-forecasting',

    seo: {
      metaTitle: 'Retail Sales Forecasting - 13.5% WAPE, LightGBM | Victor Oppon',
      metaDescription: 'Multi-horizon retail forecasting with LightGBM achieving 13.5% WAPE. 16-day predictions across 54 stores with 56 engineered features.',
      keywords: [
        'retail forecasting',
        'LightGBM time series',
        'multi-horizon forecasting',
        'demand forecasting',
        'inventory optimization',
        'gradient boosting',
        'feature engineering'
      ]
    },

    featured: false,
    order: 12,
    date: '2024-11-25'
  },

  {
    id: '13',
    slug: 'coco-smart-analytics',
    title: 'COCO Smart Analytics',
    tagline: 'Computer vision platform with Faster R-CNN detecting 80+ object categories for retail, smart cities, and security',

    domain: 'cv',
    industry: ['retail', 'smart-cities', 'security', 'traffic-management'],

    keyMetric: {
      label: 'mAP',
      value: '37.0',
      context: 'IoU=0.50:0.95 on COCO'
    },

    businessImpact: {
      roi: 'Traffic congestion reduction',
      other: [
        { label: 'Inference Speed', value: '~150ms per frame' },
        { label: 'Object Categories', value: '80+' },
        { label: 'Congestion Reduction', value: 'Up to 20%' }
      ]
    },

    techStack: ['PyTorch', 'Faster R-CNN', 'ResNet-50-FPN', 'Torchvision', 'COCO 2017', 'Streamlit', 'OpenCV'],
    modelType: 'Object Detection',

    overview: 'Intelligent scene understanding platform using Faster R-CNN for real-time detection, counting, and behavioral analysis across 80+ COCO object categories. Business applications in retail, smart cities, and security.',

    challenge: 'COCO 2017 dataset with 80+ diverse object categories. Need real-time inference (<200ms), accurate counting for crowd density and traffic flow, semantic search through image datasets.',

    solution: 'Pre-trained Faster R-CNN with ResNet-50-FPN backbone, mAP 37.0 on COCO validation, semantic retrieval for visual search, automated asset tagging and organization.',

    results: '37.0 mAP (IoU=0.50:0.95), ~150ms inference on GPU, 80+ object categories, real-time crowd density analysis, traffic flow classification, automated congestion alerts.',

    thumbnail: '/projects/coco-analytics/thumbnail.webp',
    images: [
      '/projects/coco-analytics/demo-1.webp',
      '/projects/coco-analytics/retail-detection.png',
      '/projects/coco-analytics/traffic-analysis.png'
    ],

    githubUrl: 'https://github.com/victoropp/coco-smart-analytics',

    seo: {
      metaTitle: 'COCO Smart Analytics - Object Detection, Faster R-CNN | Victor Oppon',
      metaDescription: 'Computer vision platform with Faster R-CNN detecting 80+ objects for retail, smart cities, and security. Real-time detection with 150ms inference.',
      keywords: [
        'object detection',
        'Faster R-CNN',
        'COCO dataset',
        'computer vision',
        'retail analytics',
        'smart city',
        'traffic analysis'
      ]
    },

    featured: false,
    order: 13,
    date: '2024-11-23'
  },

  {
    id: '14',
    slug: 'house-price-prediction',
    title: 'House Price Prediction',
    tagline: 'CatBoost regression achieving 90.4% R² accuracy with 223 engineered features and SHAP explainability',

    domain: 'finance',
    industry: ['real-estate', 'proptech', 'mortgage-lending', 'property-valuation', 'investment-analysis'],

    keyMetric: {
      label: 'R² Score',
      value: '90.4%',
      context: 'CatBoost prediction accuracy'
    },

    businessImpact: {
      roi: 'Property valuation automation',
      accuracy: '90.4% R² (0.904)',
      other: [
        { label: 'RMSE', value: '0.0485' },
        { label: 'MAE', value: '0.0318' },
        { label: 'Features Engineered', value: '223 from 81 original' }
      ]
    },

    techStack: ['CatBoost', 'SHAP', 'Streamlit', 'Plotly', 'Scikit-learn', 'Pandas', 'Python'],
    modelType: 'Regression',

    overview: 'Enterprise-grade property valuation platform using CatBoost regression with 223 engineered features from 81 original variables. Achieves 90.4% R² accuracy with SHAP explainability for transparent pricing decisions.',

    challenge: 'Complex housing dataset with 81 variables requiring extensive feature engineering. Need accurate price predictions with model interpretability for real estate professionals and lenders.',

    solution: 'CatBoost regression with 223 engineered features, 5-fold cross-validation, SHAP for real-time model explanations, feature importance via 6 comparative methodologies, partial dependence plotting.',

    results: '90.4% R² accuracy, RMSE 0.0485, MAE 0.0318, <500ms prediction latency, <2s page load, interactive Streamlit dashboard with Quick, Advanced, and Batch prediction modes.',

    thumbnail: '/projects/house-price/thumbnail.webp',
    images: [
      '/projects/house-price/demo-1.webp',
      '/projects/house-price/shap-summary.png',
      '/projects/house-price/feature-importance.png'
    ],

    githubUrl: 'https://github.com/victoropp/house-price-prediction-streamlit',

    seo: {
      metaTitle: 'House Price Prediction - 90.4% R², CatBoost & SHAP | Victor Oppon',
      metaDescription: 'Property valuation platform with CatBoost achieving 90.4% R² accuracy. 223 engineered features, SHAP explainability, interactive Streamlit dashboard.',
      keywords: [
        'house price prediction',
        'CatBoost regression',
        'property valuation',
        'real estate ML',
        'SHAP explainability',
        'feature engineering',
        'proptech analytics'
      ]
    },

    featured: false,
    order: 14,
    date: '2024-11-24'
  },

  {
    id: '15',
    slug: 'car-insurance-premium',
    title: 'Car Insurance Premium Analytics',
    tagline: 'Stacking ensemble achieving 99.78% R² accuracy with real-time premium prediction and explainable AI',

    domain: 'finance',
    industry: ['insurance', 'fintech', 'automotive', 'risk-management', 'underwriting'],

    keyMetric: {
      label: 'R² Score',
      value: '99.78%',
      context: 'Stacking ensemble accuracy'
    },

    businessImpact: {
      roi: 'Premium pricing automation',
      accuracy: '99.78% R² (Stacking Linear)',
      other: [
        { label: 'RMSE', value: '0.272' },
        { label: 'MAE', value: '0.201' },
        { label: 'Models Compared', value: 'XGBoost, LightGBM, CatBoost, Stacking' }
      ]
    },

    techStack: ['XGBoost', 'LightGBM', 'CatBoost', 'Scikit-learn', 'Streamlit', 'Plotly', 'Pandas', 'NumPy'],
    modelType: 'Regression (Ensemble)',

    overview: 'Advanced ML platform for car insurance premium prediction using stacking ensemble achieving 99.78% R² accuracy. Features smart calculator, what-if analysis, real-time model comparison, and explainable AI for transparent pricing decisions.',

    challenge: 'Complex insurance pricing with multiple risk factors. Need accurate premium predictions with model interpretability for underwriters and customers. Requires real-time inference for instant quotes.',

    solution: 'Stacking ensemble combining XGBoost, LightGBM, and CatBoost with linear meta-learner. Interactive what-if analysis for scenario exploration, A/B testing capabilities, multi-format report exports.',

    results: '99.78% R² accuracy (Stacking Linear), RMSE 0.272, MAE 0.201, real-time premium estimation, interactive Streamlit dashboard with model comparison and performance insights.',

    thumbnail: '/projects/car-insurance/thumbnail.webp',
    images: [
      '/projects/car-insurance/demo-1.webp',
      '/projects/car-insurance/model-comparison.png',
      '/projects/car-insurance/what-if-analysis.png'
    ],

    githubUrl: 'https://github.com/victoropp/car_insurance_premium',

    seo: {
      metaTitle: 'Car Insurance Premium Analytics - 99.78% R², Stacking Ensemble | Victor Oppon',
      metaDescription: 'Insurance premium prediction platform with stacking ensemble achieving 99.78% R² accuracy. XGBoost, LightGBM, CatBoost with explainable AI.',
      keywords: [
        'insurance premium prediction',
        'stacking ensemble',
        'XGBoost insurance',
        'car insurance ML',
        'premium pricing',
        'risk analytics',
        'insurtech'
      ]
    },

    featured: false,
    order: 15,
    date: '2024-11-24'
  },

  {
    id: '16',
    slug: 'wine-clustering-analysis',
    title: 'Wine Clustering Analysis',
    tagline: 'GMM vs K-Means comparison achieving 0.898 ARI with automatic cluster selection and uncertainty quantification',

    domain: 'analytics',
    industry: ['food-beverage', 'bioinformatics', 'customer-segmentation', 'healthcare', 'quality-control'],

    keyMetric: {
      label: 'Adjusted Rand Index',
      value: '0.898',
      context: 'K-Means clustering accuracy'
    },

    businessImpact: {
      roi: 'Product segmentation automation',
      accuracy: '0.898 ARI (K-Means)',
      other: [
        { label: 'GMM ARI', value: '0.880' },
        { label: 'Silhouette Score', value: '0.285' },
        { label: 'Chemical Features', value: '13' }
      ]
    },

    techStack: ['Scikit-learn', 'GMM', 'K-Means', 'DBSCAN', 'PCA', 't-SNE', 'Pandas', 'Matplotlib', 'Seaborn'],
    modelType: 'Unsupervised Clustering',

    overview: 'Production-grade clustering analysis comparing Gaussian Mixture Models and K-Means on UCI Wine Dataset. Features automatic cluster selection (Elbow, Silhouette, AIC, BIC), uncertainty quantification, and comprehensive visualizations.',

    challenge: '178 wine samples with 13 chemical features and 3 unknown cultivar classes. Need to discover natural groupings without labeled data while providing confidence scores for business decisions.',

    solution: 'GMM for probabilistic soft clustering with uncertainty quantification, K-Means for hard clustering baseline, DBSCAN for density-based comparison. PCA and t-SNE for visualization, automatic optimal k selection.',

    results: 'K-Means: 0.898 ARI, 0.285 silhouette. GMM: 0.880 ARI, 0.284 silhouette, BIC 5806.3. Confidence heatmaps, entropy distributions, decision boundary visualizations.',

    thumbnail: '/projects/wine-clustering/thumbnail.webp',
    images: [
      '/projects/wine-clustering/demo-1.webp',
      '/projects/wine-clustering/pca-clusters.png',
      '/projects/wine-clustering/confusion-matrix.png'
    ],

    githubUrl: 'https://github.com/victoropp/wine-clustering-gmm-kmeans',

    seo: {
      metaTitle: 'Wine Clustering Analysis - GMM vs K-Means, 0.898 ARI | Victor Oppon',
      metaDescription: 'Unsupervised clustering comparing GMM and K-Means on wine chemical data. 0.898 ARI accuracy with automatic cluster selection and uncertainty quantification.',
      keywords: [
        'wine clustering',
        'Gaussian Mixture Models',
        'K-Means clustering',
        'unsupervised learning',
        'PCA visualization',
        't-SNE',
        'customer segmentation'
      ]
    },

    featured: false,
    order: 16,
    date: '2024-11-24'
  },

  {
    id: '17',
    slug: 'naive-bayes-spam-detection',
    title: 'Naive Bayes Spam Detection',
    tagline: 'MATLAB-based email classifier achieving 91.6% ROC-AUC with hyperparameter optimization and bootstrap validation',

    domain: 'nlp',
    industry: ['email-security', 'cybersecurity', 'telecommunications', 'enterprise-software'],

    keyMetric: {
      label: 'ROC-AUC',
      value: '91.6%',
      context: 'Spam classification accuracy'
    },

    businessImpact: {
      roi: 'Email security automation',
      accuracy: '85.94% test accuracy',
      other: [
        { label: 'Precision', value: '0.838' },
        { label: 'Recall', value: '0.797' },
        { label: 'F1-Score', value: '0.817' }
      ]
    },

    techStack: ['MATLAB', 'Naive Bayes', 'Logistic Regression', 'UCI Spambase', 'Bootstrap CI', 'Cross-Validation'],
    modelType: 'Binary Classification',

    overview: 'Production-ready email spam classifier using Naive Bayes on UCI Spambase dataset (4,601 emails, 57 features). Features hyperparameter optimization, 5-fold cross-validation, and bootstrap confidence intervals.',

    challenge: 'UCI Spambase with 4,601 emails and 57 features. Need robust spam detection with statistical confidence, feature selection to reduce dimensionality, and production-deployable model.',

    solution: 'Naive Bayes with kernel optimization, low-variance and high-correlation feature elimination, stratified 5-fold CV, grid search with optimization surface visualization, bootstrap 95% CI estimation.',

    results: '85.94% accuracy, 91.6% ROC-AUC, 0.838 precision, 0.797 recall, 0.817 F1-score. 95% CI: [83.99%, 87.61%]. Logistic Regression baseline: 87.68%. Exportable model for production.',

    thumbnail: '/projects/spam-detection/thumbnail.webp',
    images: [
      '/projects/spam-detection/demo-1.webp',
      '/projects/spam-detection/roc-curve.png',
      '/projects/spam-detection/confusion-matrix.png'
    ],

    githubUrl: 'https://github.com/victoropp/naive-bayes-spam-detection',

    seo: {
      metaTitle: 'Naive Bayes Spam Detection - 91.6% ROC-AUC, MATLAB | Victor Oppon',
      metaDescription: 'Email spam classifier using Naive Bayes achieving 91.6% ROC-AUC. MATLAB implementation with hyperparameter optimization and bootstrap validation.',
      keywords: [
        'spam detection',
        'Naive Bayes classifier',
        'email classification',
        'MATLAB machine learning',
        'UCI Spambase',
        'cybersecurity ML',
        'text classification'
      ]
    },

    featured: false,
    order: 17,
    date: '2024-11-24'
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).sort((a, b) => a.order - b.order);
};

// Helper function to get projects by domain
export const getProjectsByDomain = (domain: string): Project[] => {
  return projects.filter(project => project.domain === domain);
};
