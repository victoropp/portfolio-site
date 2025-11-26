import type { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, TrendingUp, Building2 } from "lucide-react"
import { projects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "About | Victor Collins Oppon",
  description: "Data Scientist & ML Engineer with 15+ years of analytical leadership, blending Finance/Accounting expertise (ACCA, MBA Finance) with advanced Machine Learning capabilities. Specialized in building end-to-end production ML systems.",
  keywords: [
    "data scientist",
    "machine learning engineer",
    "ACCA",
    "MBA Finance",
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
        {/* Hero Section */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1
              className="text-display font-bold mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              I&apos;m a <span className="text-primary font-semibold">Data Scientist & ML Engineer</span> with{" "}
              <span className="text-accent font-semibold">15+ years of analytical leadership</span>,
              uniquely positioned at the intersection of advanced machine learning and financial expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="default">ACCA Fellow</Badge>
              <Badge variant="secondary">MBA Finance</Badge>
              <Badge variant="accent">MSc Data Science (2026)</Badge>
              <Badge variant="outline">BSc Accounting (First Class)</Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Professional Summary */}
        <ScrollReveal delay={0.2}>
          <Card className="mb-12 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary flex-shrink-0">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-heading mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Professional Summary
                </h2>
                <p className="text-body text-muted-foreground mb-4">
                  With a rare combination of <strong className="text-foreground">Chartered Accountancy (FCCA)</strong> and{" "}
                  <strong className="text-foreground">Advanced Machine Learning expertise</strong>, I architect production-grade ML systems that
                  deliver measurable, transformative business impact. My <strong className="text-foreground">15+ years</strong> leading financial analytics
                  and enterprise intelligence initiatives uniquely position me to bridge the gap between cutting-edge AI and real-world business value.
                </p>
                <p className="text-body text-muted-foreground mb-4">
                  I specialize in transforming complex business challenges into scalable, production-ready ML solutions across{" "}
                  <span className="text-primary font-semibold">Finance & Risk Analytics</span>,{" "}
                  <span className="text-secondary font-semibold">Healthcare AI</span>,{" "}
                  <span className="text-accent font-semibold">Retail Intelligence</span>, and{" "}
                  <span className="text-foreground font-semibold">Enterprise Automation</span> — delivering end-to-end ML pipelines
                  from strategic concept to deployed, monitored production systems.
                </p>
                <p className="text-body text-muted-foreground">
                  <strong className="text-foreground">Proven Track Record:</strong> {projects.length}+ production ML projects deployed,
                  consistently achieving <strong className="text-foreground">90%+ model accuracy</strong>, driving{" "}
                  <strong className="text-foreground">millions in cost savings</strong>, and enabling data-driven decision-making
                  at the executive level.
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal delay={0.3}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-heading" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Education & Certifications
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Degree Cards */}
              <Card className="p-6 glass glass-hover">
                <div className="flex items-start gap-4">
                  <Badge variant="accent" className="mt-1">In Progress</Badge>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      MSc Data Science
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Middlesex University, London
                    </p>
                    <p className="text-xs text-muted">Expected: January 2026</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Machine Learning, Big Data Analytics, NLP, Cloud Systems, AI Ethics
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass glass-hover">
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">Completed</Badge>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      MBA Finance
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Wisconsin International University College, Ghana
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Strategic analysis, quantitative methods, data-driven decision making
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass glass-hover">
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="mt-1">Fellow</Badge>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      FCCA (Fellow Chartered Certified Accountant)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Association of Chartered Certified Accountants
                    </p>
                    <p className="text-xs text-muted">Professional Qualification</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass glass-hover">
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">First Class</Badge>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      BSc Administration (Accounting)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      University of Ghana Business School
                    </p>
                    <p className="text-xs text-muted">First Class Honours</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Statistical analysis, research methodology, quantitative analysis
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Professional Certifications */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Professional Certifications</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">MATLAB Programming & Analytics (MathWorks 2025)</Badge>
                <Badge variant="outline">Microsoft Power BI Expert</Badge>
                <Badge variant="outline">Advanced Excel & VBA Specialist</Badge>
                <Badge variant="outline">Python for Data Science</Badge>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Professional Experience */}
        <ScrollReveal delay={0.4}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-heading" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Professional Experience
              </h2>
            </div>
            <div className="space-y-6">
              {/* Experience Timeline */}
              <Card className="p-6 glass glass-hover">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          Senior Finance Manager (Advanced Analytics & Automation)
                        </h3>
                        <p className="text-sm text-muted-foreground">SIA QSR Ltd</p>
                      </div>
                      <Badge variant="secondary">Jul 2023 - Dec 2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Architected integrated analytics platform using Python and Power BI, improving executive decision-making speed by 35%.
                      Developed predictive financial models achieving 20% improvement in resource allocation accuracy.
                      Built automated reporting systems reducing manual processing time by 40%.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">Power BI</Badge>
                      <Badge variant="outline">Predictive Modeling</Badge>
                      <Badge variant="outline">Process Automation</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass glass-hover">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          Finance Manager (Business Intelligence & Predictive Analytics)
                        </h3>
                        <p className="text-sm text-muted-foreground">Chase Petroleum Company Limited</p>
                      </div>
                      <Badge variant="outline">Jul 2020 - Jun 2023</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Spearheaded enterprise-wide BI transformation, reducing manual reporting by 50% and delivering interactive dashboards
                      for $50M+ annual revenue operations. Designed statistical forecasting models improving budget accuracy by 15%.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">BI Transformation</Badge>
                      <Badge variant="outline">Time Series Analysis</Badge>
                      <Badge variant="outline">ETL Pipelines</Badge>
                      <Badge variant="outline">$50M+ Operations</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass glass-hover">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Progressive Leadership in Oil & Gas Analytics
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Puma Energy (2017-2020) | Juwel Energy (2013-2016) | Cardinal Petroleum (2009-2013)
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Led analytical operations across multiple subsidiaries, managing $300M+ treasury operations.
                      Achieved zero audit discrepancies and 100% reporting accuracy. Improved profit margin visibility by 25%
                      and working capital efficiency by 18% through predictive modeling.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Treasury Analytics</Badge>
                      <Badge variant="outline">Risk Modeling</Badge>
                      <Badge variant="outline">Financial Modeling</Badge>
                      <Badge variant="outline">Team Leadership</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Core Competencies */}
        <ScrollReveal delay={0.5}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-heading" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Core Competencies
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 glass glass-hover">
                <h3 className="text-lg font-bold text-foreground mb-4">Machine Learning & AI</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Supervised & Unsupervised Learning (Classification, Regression, Clustering)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Deep Learning (TensorFlow, Keras, PyTorch)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>NLP & Sentiment Analysis (BERT, Transformers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Computer Vision (CNN, Image Classification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Time Series Forecasting (ARIMA, LSTM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>MLOps & Model Deployment (Production Pipelines, Monitoring)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Explainable AI (SHAP, LIME, Feature Importance)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 glass glass-hover">
                <h3 className="text-lg font-bold text-secondary mb-4">Financial Analytics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Financial Modeling & Forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Risk Analysis & Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Business Intelligence & Reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Strategic Planning & Decision Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Accounting Systems & Process Optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Regulatory Compliance & Audit Analytics (IFRS, SOX)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 glass glass-hover">
                <h3 className="text-lg font-bold text-foreground mb-4">Technical Stack</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Languages:</strong> Python, R, SQL, VBA, MATLAB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>ML/DL:</strong> scikit-learn, TensorFlow, Keras, PyTorch, XGBoost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Data:</strong> Pandas, NumPy, PySpark, SQL Server, PostgreSQL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Viz:</strong> Power BI, Tableau, Matplotlib, Seaborn, Plotly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Tools:</strong> Git, Docker, Streamlit, Flask, FastAPI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Cloud:</strong> AWS (SageMaker, S3, EC2), Azure ML, GCP</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 glass glass-hover">
                <h3 className="text-lg font-bold text-foreground mb-4">Domain Expertise</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Financial Services:</strong> Fraud Detection, Risk Modeling, Credit Scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Healthcare:</strong> Medical Image Classification, Disease Prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Retail:</strong> Demand Forecasting, Customer Analytics, Market Basket Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Oil & Gas:</strong> Energy Trading & Pricing, Operations Optimization</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Unique Value Proposition */}
        <ScrollReveal delay={0.6}>
          <Card className="mt-12 p-8 glass border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary flex-shrink-0">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-heading mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  What Sets Me Apart
                </h2>
                <div className="space-y-4 text-body text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Rare Dual Expertise:</strong> A unique combination of{" "}
                    <strong className="text-primary">FCCA Chartered Accountancy</strong>,{" "}
                    <strong className="text-secondary">15+ years business leadership</strong>, and{" "}
                    <strong className="text-accent">cutting-edge ML/AI capabilities</strong>. I don&apos;t just build models —
                    I understand the business context, ROI implications, and strategic value that makes them impactful.
                  </p>
                  <p>
                    <strong className="text-foreground">Full-Stack ML Expertise:</strong> From{" "}
                    <span className="text-primary">deep learning (PyTorch, TensorFlow)</span> to{" "}
                    <span className="text-secondary">gradient boosting (XGBoost, LightGBM, CatBoost)</span> to{" "}
                    <span className="text-accent">NLP transformers (BERT, GPT)</span> — I select and implement the right
                    technique for each business problem, not just the trendiest algorithm.
                  </p>
                  <p>
                    <strong className="text-foreground">Multi-Domain Versatility:</strong> Proven success across{" "}
                    <strong className="text-foreground">Finance</strong> (fraud detection, stock forecasting, insurance pricing),{" "}
                    <strong className="text-foreground">Healthcare</strong> (medical imaging, disease prediction),{" "}
                    <strong className="text-foreground">Retail</strong> (demand forecasting, customer analytics),{" "}
                    <strong className="text-foreground">NLP</strong> (sentiment analysis, NER), and{" "}
                    <strong className="text-foreground">Computer Vision</strong> (object detection, image classification).
                  </p>
                  <p>
                    <strong className="text-foreground">Production-First Mindset:</strong> Every project includes interactive
                    Streamlit dashboards, FastAPI endpoints, Docker deployment, and comprehensive documentation. I build
                    systems that stakeholders can actually use — not just notebooks that collect dust.
                  </p>
                  <p>
                    <strong className="text-foreground">Explainable AI Champion:</strong> SHAP, LIME, Grad-CAM, and feature
                    importance analysis in every project. I believe ML models must be interpretable for business adoption,
                    regulatory compliance, and building stakeholder trust.
                  </p>
                  <p>
                    <strong className="text-foreground">Proven Impact:</strong> {projects.length}+ production ML projects with
                    metrics like <strong className="text-primary">99.78% R²</strong>,{" "}
                    <strong className="text-secondary">98% ROC-AUC</strong>,{" "}
                    <strong className="text-accent">$131K+ savings per 100K transactions</strong>, and consistent delivery
                    of measurable business outcomes across diverse industries.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
