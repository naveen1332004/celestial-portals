import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { GraduationCap, Briefcase, Code2, Cloud, Brain, Palette, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "M.Sc. (Master's)",
    institution: "Periyar University",
    dates: "Aug 2024 – May 2026",
    field: "Data Science",
    gpa: "8 / 10",
    status: "Pursuing",
  },
  {
    degree: "B.Sc. (Bachelor's)",
    institution: "Periyar University",
    dates: "Aug 2021 – Jun 2024",
    field: "Computer Science",
    gpa: "7.5 / 10",
    status: "Completed",
  },
];

const experience = [
  {
    role: "SAP BTP & HANA Intern (Data Analyst & Software Development)",
    company: "Ladera Technology Pvt. Ltd (Offline) Bengaluru ",
    focus: "Performed data analysis and reporting tasks using SAP BTP and related tools. Assisted in building and testing data-driven applications on cloud platforms. Analyzed business data to support decision-making and process optimization.",
  },
  {
    role: "AI | Cloud | DevOps Engineer",
    company: "Freelance (Remote)",
    focus: "Integrating cutting-edge AI solutions with robust cloud infrastructure and DevOps practices to deliver scalable, high-impact data-driven systems.",
  },
];

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Databases",
    level: 70,
    description: "Python, JavaScript, R, SQL, PostgreSQL, MongoDB",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    level: 55,
    description: "AWS (EC2, S3), Docker, Kubernetes, CI/CD, Airflow",
  },
  {
    icon: Brain,
    title: "ML & AI Tools",
    level: 60,
    description: "TensorFlow, PyTorch, Scikit-learn, OpenCV, NLP, Computer Vision",
  },
  {
    icon: Palette,
    title: "Frontend & Backend Coding",
    level: 55,
    description: "React, Vite, Tailwind CSS, Flask, Streamlit",
  },
];

const technologiesData = [
  {
    category: "SAP BTP & HANA",
    skills: [
      { name: "SAP HANA Database", level: 60 },
      { name: "SQL ", level: 70 },
      { name: "Calculation Views", level: 82 },
      { name: "Data Modeling", level: 85 },
      { name: "Performance Optimization", level: 80 },
      { name: "In-Memory DB Concepts", level: 83 },
    ],
  },
  {
    category: "Programming & Frameworks",
    skills: [
      { name: "Python", level: 75, icon: "🐍" },
      { name: "JavaScript", level: 68, icon: "⚡" },
      { name: "R", level: 65, icon: "📊" },
      { name: "SQL", level: 70, icon: "🗄️" },
    ],
  },
  {
    category: "ML/DL & AI Techniques",
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "Scikit-learn", level: 72 },
      { name: "Neural Networks & CNNs", level: 68 },
      { name: "Transformers/GPT", level: 65 },
    ],
  },
  {
    category: "Data Tools & Visualization",
    skills: [
      { name: "Power BI/Tableau", level: 90 },
      { name: "Pandas/NumPy", level: 75 },
      { name: "Matplotlib/Seaborn", level: 82 },
      { name: "PySpark/Airflow", level: 85 },
    ],
  },
  {
    category: "Deployment & Platforms",
    skills: [
      { name: "Flask/Streamlit", level: 88 },
      { name: "AWS EC2/S3", level: 85 },
      { name: "React/Vite", level: 70 },
      { name: "Tailwind CSS", level: 72 },
    ],
  },
];

const languagesCore = [
  { name: "Python", icon: "🐍", description: "Data Science, ML, Automation" },
  { name: "R", icon: "📊", description: "Statistical Computing & Visualization" },
  { name: "C++", icon: "⚡", description: "High-Performance Computing" },
  { name: "SQL", icon: "🗄️", description: "Database Management & Querying" },
];

const handleDownloadResume = () => {
  window.open('https://drive.google.com/file/d/16Cclq4fUL3mpcwouC8Vs-Lw7CRrv_v8s/view', '_blank');
};

const Skills = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Resume & Skills
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              My academic journey, experience, and technical expertise
            </p>
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="inline-flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-full text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
              >
                Download Resume
                <Download className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold gradient-text">Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.3 } 
                  }}
                  className="relative group"
                >
                  {/* 3D Shadow Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl translate-y-2 translate-x-2" />
                  
                  {/* Main Card */}
                  <div className="relative glass p-8 rounded-2xl space-y-4 border border-border/50 shadow-2xl transform transition-all duration-300 group-hover:shadow-primary/25">
                    {/* Header with Status Badge */}
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-2xl font-bold gradient-text">{edu.degree}</h3>
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                        edu.status === "Pursuing" 
                          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground" 
                          : "bg-gradient-to-r from-secondary to-secondary/80 text-primary-foreground"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    {/* Institution with Icon */}
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                      <p className="text-lg font-bold">{edu.institution}</p>
                    </div>
                    
                    {/* Field of Study */}
                    <p className="text-base text-muted-foreground font-medium pl-3">{edu.field}</p>
                    
                    {/* Footer Stats with 3D Effect */}
                    <div className="flex justify-between items-center pt-4 mt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
                        <span className="text-sm text-muted-foreground">{edu.dates}</span>
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                        <span className="text-sm font-bold gradient-text">CGPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold gradient-text">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold gradient-text mb-2">{exp.role}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">
              Technical Proficiency
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  {/* 3D Shadow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  
                  {/* Main Card */}
                  <div className="relative glass p-8 rounded-2xl space-y-6 border border-border/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                        <span className="text-2xl font-bold gradient-text">{category.level}%</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                    
                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.description.split(', ').map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted/50 border border-border/50 hover:border-primary/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies I Work With Section - Mobile Optimized */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center mb-8 md:mb-12 px-4">
              Technologies I Work With
            </h2>
            <div className="space-y-4 md:space-y-6">
              {technologiesData.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  {/* 3D Shadow Effect - Subtle on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  
                  {/* Main Card - Responsive padding */}
                  <div className="relative glass p-4 md:p-8 rounded-xl md:rounded-2xl border border-border/50">
                    {/* Category Header - Mobile optimized */}
                    <h3 className="text-lg md:text-2xl font-bold gradient-text mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                      <span className="w-1 md:w-1.5 h-6 md:h-8 bg-gradient-to-b from-primary to-secondary rounded-full flex-shrink-0" />
                      <span className="line-clamp-2">{category.category}</span>
                    </h3>
                    
                    {/* Skill Grid - Single column on mobile, full grid on tablet+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="relative"
                        >
                          {/* Skill Badge - Enhanced mobile layout */}
                          <div className="flex items-center justify-between sm:flex-col sm:items-center sm:justify-center p-4 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-primary/50 transition-all group/skill min-h-[60px] sm:min-h-[90px]">
                            {/* Mobile: Horizontal layout */}
                            <span className="text-sm md:text-base font-bold sm:text-center sm:mb-2 flex-1 sm:flex-none">{skill.name}</span>
                            
                            {/* Rating and percentage - Compact on mobile */}
                            <div className="flex items-center gap-2 sm:gap-1.5 flex-shrink-0">
                              {/* Star rating - Hidden on very small screens, shown on sm+ */}
                              <div className="hidden sm:flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                                      i < Math.floor(skill.level / 20)
                                        ? 'bg-primary'
                                        : 'bg-muted-foreground/30'
                                    }`}
                                  />
                                ))}
                              </div>
                              {/* Percentage - Prominent on mobile */}
                              <span className="text-sm md:text-base font-bold text-primary">{skill.level}%</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
