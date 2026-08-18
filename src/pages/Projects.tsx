import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";

const workExperience = [
  {
    role: "Data Analyst",
    company: "DD Royal LLC",
    location: "Remote",
    period: "Aug 2024 - Present",
    type: "Full-time",
    achievements: [
      "Analysed 100K+ purchase records using Python and SQL to support pricing and product recommendation analysis.",
      "Developed automated data cleaning and preprocessing pipelines to improve data quality and model-training efficiency.",
      "Performed customer behaviour and transaction analysis to identify patterns and potential fraud indicators.",
      "Built data-driven ad ranking and engagement analysis to support optimization of user interactions.",
      "Created reports and visualizations to communicate insights and support data-driven decision-making.",
    ],
    skills: ["Python", "SQL", "Pandas", "AWS", "Data Analysis", "Data Cleaning", "Statistical Analysis", "Machine Learning"],
  },
  {
    role: "SAP BTP & HANA Intern (Data Analyst & Software Development)",
    company: "Ladera Technology Pvt. Ltd (Offline)",
    location: "Bengaluru",
    period: "Dec 2025 – May 2026",
    achievements: [
      "Performed data analysis and reporting tasks using SAP BTP and related tools.",
      "Assisted in building and testing data-driven applications on cloud platforms.",
      "Analyzed business data to support decision-making and process optimization.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "AIU Sports Analytics",
    location: "Salem",
    period: "Jan 2025 – Mar 2025",
    achievements: [
      "Improved data management, coordination, and technical execution efficiency by 40% through streamlined processes",
      "Conducted data cleaning, EDA, and visualization to generate actionable sports performance insights",
      "Designed automated reporting workflows to reduce manual processing time by 30%",
      "Collaborated with coaches/analysts to translate data findings into performance improvement strategies",
    ],
  },
  {
    role: "Project Coordinator",
    company: "Infosys Springboard – Naan Mudhalvan",
    location: "Salem",
    period: "Oct 2024 – Dec 2024",
    achievements: [
      "Served as a program coordinator for Infosys Springboard initiatives under the Naan Mudhalvan scheme",
      "Facilitated training sessions, project coordination, and stakeholder communication for student participants",
      "Supported curriculum implementation and ensured smooth delivery of AI/ML learning modules",
      "Recognized for effective team management and organizational skills in handling multiple project workflows",
    ],
  },
];

const projects = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Problem Statement ID: SIH25197 | 3rd Place Winner",
    description: "AI/ML–enabled video analysis and interpretation pipeline for surveillance data processing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["AI/ML", "Cloud Architecture", "Video Processing"],
    achievements: [
      "Built cloud-native, scalable architecture for multi-site deployment across NSG facilities",
      "Improved video processing throughput by 30% with optimized preprocessing pipelines",
      "Delivered functional prototype in 36 hours with 6-member team",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "AIU Sports Analytics",
    subtitle: "Analytics Expert",
    description: "Time-series forecasting and predictive modeling for player and match performance metrics",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    tech: ["Python", "Time-series Analysis", "Data Visualization"],
    achievements: [
      "Developed interactive visualizations for actionable insights",
      "Enabled early identification of performance trends for coaches",
      "Improved decision-making during tournaments",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "AI Medical Chatbot",
    subtitle: "NLP/LLMs",
    description: "AI-driven medical chatbot with real-time NLP query processing",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tech: ["BERT", "GPT", "LLAMA", "NLP"],
    achievements: [
      "Achieved 90%+ accuracy in medical entity recognition",
      "Improved reliability in patient–bot interactions",
      "Integrated multiple LLMs for enhanced query understanding",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Fashion Recommender System",
    subtitle: "Image-based Recommendations",
    description: "Web application recommending visually similar fashion items from uploaded images",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    tech: ["CNN", "Python", "Web Development"],
    achievements: [
      "Implemented CNN-based feature extraction with high accuracy",
      "Optimized inference pipeline for sub-1.5s recommendations",
      "Built functional web application for real-time suggestions",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Customer Churn Insights",
    subtitle: "Data Analytics Project",
    description: "SQL & Python-based analysis to identify and visualize customer churn patterns",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["SQL", "Python", "Tableau", "Power BI"],
    achievements: [
      "Conducted EDA and feature engineering to identify churn drivers",
      "Built interactive dashboards for churn pattern visualization",
      "Reduced churn prediction error by 20%",
    ],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Work Experience & Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional journey and technical achievements
            </p>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              Work Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <p>{exp.location}</p>
                      <p>{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-sm text-primary/80 font-semibold mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.achievements && (
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
