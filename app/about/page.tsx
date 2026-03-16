import type { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { projects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "About | Victor Collins Oppon",
  description: "Data Scientist & ML Engineer building production AI applications using agentic AI. Finance background (FCCA, MSc Data Science with Distinction). Shipping agentic apps across finance, education, and wellness alongside 18+ ML projects.",
  keywords: [
    "data scientist",
    "machine learning engineer",
    "MSc Data Science",
    "FCCA",
    "ACCA",
    "MBA Finance",
    "agentic AI",
    "financial analytics",
    "production ML",
    "business intelligence",
    "chartered accountant",
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mb-20">
            <span className="section-index block mb-6">About</span>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Builder. Data Scientist.<br />Finance Expert.
            </h1>
            <span className="rule-editorial block mb-8" />
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              I build production AI applications using agentic AI. My background is in finance (FCCA) and data science (MSc with Distinction) — which means I understand what it takes to turn a messy real-world problem into a working product.
            </p>
          </div>
        </ScrollReveal>

        {/* Qualifications strip */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-t border-b border-white/5 mb-20">
            {[
              { label: "ACCA Fellow", sub: "FCCA" },
              { label: "MBA Finance", sub: "Wisconsin IUC" },
              { label: "MSc Data Science", sub: "Distinction · 2025" },
              { label: "BSc Accounting", sub: "First Class" },
            ].map((q) => (
              <div key={q.label} className="px-6 py-8 first:pl-0">
                <p className="text-sm font-semibold text-foreground mb-1">{q.label}</p>
                <p className="text-xs text-muted-foreground">{q.sub}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal delay={0.15}>
          <div className="mb-16 border-t border-white/5 pt-12">
            <span className="section-index block mb-8">Education & Certifications</span>
            <div className="divide-y divide-white/5">

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">2025</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base font-semibold text-foreground mb-1">MSc Data Science — Distinction</p>
                  <p className="text-sm text-muted-foreground mb-2">Middlesex University London</p>
                  <p className="text-xs text-foreground/40 mb-2">Top 5 Best Project Award</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Machine Learning · Big Data Analytics · NLP · Cloud Systems · AI Ethics
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Dissertation: Food Insecurity Early Warning System — Two-stage cascade ML across 18 African nations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">MBA</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base font-semibold text-foreground mb-1">MBA Finance</p>
                  <p className="text-sm text-muted-foreground">Wisconsin International University College, Ghana</p>
                  <p className="text-xs text-muted-foreground mt-1">Strategic analysis · Quantitative methods · Data-driven decision making</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">FCCA</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base font-semibold text-foreground mb-1">Fellow Chartered Certified Accountant</p>
                  <p className="text-sm text-muted-foreground">Association of Chartered Certified Accountants</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">BSc</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base font-semibold text-foreground mb-1">BSc Administration (Accounting) — First Class</p>
                  <p className="text-sm text-muted-foreground">University of Ghana Business School</p>
                  <p className="text-xs text-muted-foreground mt-1">Statistical analysis · Research methodology · Quantitative analysis</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">Certs</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    MATLAB Programming & Analytics (MathWorks 2025) · Microsoft Power BI Expert · Advanced Excel & VBA Specialist · Python for Data Science
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16 border-t border-white/5 pt-12">
            <span className="section-index block mb-8">Professional Experience</span>
            <div className="divide-y divide-white/5">

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">2023–2024</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base font-semibold text-foreground mb-1">Finance Manager — Analytics & Automation</p>
                  <p className="text-sm text-muted-foreground mb-3">SIA QSR Ltd</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Architected integrated analytics platform using Python and Power BI, improving executive decision-making speed by 35%.
                    Developed predictive financial models achieving 20% improvement in resource allocation accuracy.
                    Built automated reporting systems reducing manual processing time by 40%.
                  </p>
                  <p className="text-xs text-foreground/40">Python · Power BI · Predictive Modeling · Process Automation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">2020–2023</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base font-semibold text-foreground mb-1">Finance Manager — Business Intelligence & Predictive Analytics</p>
                  <p className="text-sm text-muted-foreground mb-3">Chase Petroleum Company Limited</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Spearheaded enterprise-wide BI transformation, reducing manual reporting by 50% and delivering interactive dashboards
                    for $50M+ annual revenue operations. Designed statistical forecasting models improving budget accuracy by 15%.
                  </p>
                  <p className="text-xs text-foreground/40">BI Transformation · Time Series Analysis · ETL Pipelines · $50M+ Operations</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                <div className="md:col-span-1">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest">2009–2020</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base font-semibold text-foreground mb-1">Progressive Leadership — Oil & Gas Analytics</p>
                  <p className="text-sm text-muted-foreground mb-3">Puma Energy · Juwel Energy · Cardinal Petroleum</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Led analytical operations across multiple subsidiaries, managing $300M+ treasury operations.
                    Achieved zero audit discrepancies and 100% reporting accuracy. Improved profit margin visibility by 25%
                    and working capital efficiency by 18% through predictive modeling.
                  </p>
                  <p className="text-xs text-foreground/40">Treasury Analytics · Risk Modeling · Financial Modeling · Team Leadership</p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Core Competencies */}
        <ScrollReveal delay={0.25}>
          <div className="mb-16 border-t border-white/5 pt-12">
            <span className="section-index block mb-8">Core Competencies</span>
            <div className="divide-y divide-white/5">

              {[
                {
                  title: "Machine Learning & AI",
                  items: [
                    "Supervised & Unsupervised Learning (Classification, Regression, Clustering)",
                    "Deep Learning (TensorFlow, Keras, PyTorch)",
                    "NLP & Sentiment Analysis (BERT, Transformers)",
                    "Computer Vision (CNN, Image Classification)",
                    "Time Series Forecasting (ARIMA, LSTM)",
                    "MLOps & Model Deployment (Production Pipelines, Monitoring)",
                    "Explainable AI (SHAP, LIME, Feature Importance)",
                  ],
                },
                {
                  title: "AI & LLM Development",
                  items: [
                    "LLM APIs — agentic patterns, tool use, function calling",
                    "Multi-Agent Systems — orchestration, handoffs, error recovery",
                    "Production LLM Apps — deployed across finance, education, wellness",
                    "Agentic Developer Platform — API provisioning and integration",
                  ],
                },
                {
                  title: "Financial Analytics",
                  items: [
                    "Financial Modeling & Forecasting",
                    "Risk Analysis & Management",
                    "Business Intelligence & Reporting",
                    "Strategic Planning & Decision Support",
                    "Accounting Systems & Process Optimization",
                    "Regulatory Compliance & Audit Analytics (IFRS, SOX)",
                  ],
                },
                {
                  title: "Technical Stack",
                  items: [
                    "Languages: Python, R, SQL, VBA, MATLAB",
                    "ML/DL: scikit-learn, TensorFlow, Keras, PyTorch, XGBoost",
                    "Data: Pandas, NumPy, PySpark, SQL Server, PostgreSQL",
                    "Viz: Power BI, Tableau, Matplotlib, Seaborn, Plotly",
                    "Tools: Git, Docker, Streamlit, Flask, FastAPI",
                    "Cloud: AWS (SageMaker, S3, EC2), Azure ML, GCP",
                  ],
                },
                {
                  title: "Domain Expertise",
                  items: [
                    "Financial Services: Fraud Detection, Risk Modeling, Credit Scoring",
                    "Healthcare: Medical Image Classification, Disease Prediction",
                    "Retail: Demand Forecasting, Customer Analytics, Market Basket Analysis",
                    "Oil & Gas: Energy Trading & Pricing, Operations Optimization",
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                  <div className="md:col-span-1">
                    <p className="section-index">{section.title}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.items.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </ScrollReveal>

        {/* What Sets Me Apart */}
        <ScrollReveal delay={0.3}>
          <div className="border-t border-white/5 pt-12">
            <span className="section-index block mb-8">What Sets Me Apart</span>
            <div className="max-w-3xl space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Builder-Practitioner:</strong> I don&apos;t just build ML models — I ship full AI-powered applications using agentic AI.
                From agentic ERPs to AI tutors, I&apos;ve gone from concept to production across multiple domains,
                combining deep finance expertise (FCCA) with hands-on AI development.
              </p>
              <p>
                <strong className="text-foreground">Full-Stack ML Expertise:</strong> From deep learning (PyTorch, TensorFlow) to gradient boosting
                (XGBoost, LightGBM, CatBoost) to NLP transformers (BERT, GPT) — I select and implement the right
                technique for each business problem, not just the trendiest algorithm.
              </p>
              <p>
                <strong className="text-foreground">Multi-Domain Versatility:</strong> Proven success across Finance (fraud detection, stock forecasting),
                Healthcare (medical imaging, disease prediction), Retail (demand forecasting, customer analytics),
                NLP (sentiment analysis, NER), and Computer Vision (object detection, image classification).
              </p>
              <p>
                <strong className="text-foreground">Production-First Mindset:</strong> Every project includes interactive Streamlit dashboards,
                FastAPI endpoints, Docker deployment, and comprehensive documentation. I build systems that stakeholders
                can actually use — not just notebooks that collect dust.
              </p>
              <p>
                <strong className="text-foreground">Proven Impact:</strong> {projects.length}+ production ML projects with metrics like 99.78% R²,
                98% ROC-AUC, $131K+ savings per 100K transactions, and consistent delivery of measurable business
                outcomes across diverse industries.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
