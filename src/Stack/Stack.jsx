import styles from './Stack.module.css'
import { 
    FaReact, FaNodeJs, FaPython, FaJava, 
    FaGitAlt, FaDocker, FaAws, FaDatabase,
    FaHtml5, FaCss3Alt, FaJsSquare
} from 'react-icons/fa'
import { 
    SiExpress, SiMongodb, SiTailwindcss, 
    SiPostgresql, SiTypescript, SiFirebase,
    SiSupabase, SiKubernetes, SiIntellijidea,
    SiWebstorm, SiCplusplus
} from 'react-icons/si'

function Stack() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: "💻",
            skills: [
                { name: "React", icon: FaReact, color: "#61DAFB" },
                { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
                { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" }
            ]
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: [
                { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
                { name: "Python", icon: FaPython, color: "#3776AB" },
                { name: "Java", icon: FaJava, color: "#ff0000" }
            ]
        },
        {
            title: "Object Oriented Programming",
            icon: "🧬",
            skills: [
                { name: "Java", icon: FaJava, color: "#ff0000" },
                { name: "Python", icon: FaPython, color: "#3776AB" },
                { name: "C", icon: SiCplusplus, color: "#00599C" }
            ]
        },
        {
            title: "Database",
            icon: "🗄️",
            skills: [
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
                { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
                { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
                { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }
            ]
        },
        {
            title: "Tools & DevOps",
            icon: "🛠️",
            skills: [
                { name: "Git", icon: FaGitAlt, color: "#F05032" },
                { name: "Docker", icon: FaDocker, color: "#2496ED" },
                { name: "AWS", icon: FaAws, color: "#FF9900" },
                { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
                { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#ff1d1d" },
                { name: "WebStorm", icon: SiWebstorm, color: "#1975ff" }
            ]
        }
    ]

    return (
        <section className={styles.skills} id="skills">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>My Skills</h2>
                <p className={styles.sectionSubtitle}>
                    Technologies and tools I work with
                </p>

                <div className={styles.skillsGrid}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryIcon}>{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, idx) => {
                                    const IconComponent = skill.icon
                                    return (
                                        <div key={idx} className={styles.skillItem}>
                                            <div className={styles.skillIconWrapper}>
                                                <IconComponent 
                                                    className={styles.skillIcon} 
                                                    style={{ color: skill.color }}
                                                />
                                            </div>
                                            <span className={styles.skillName}>{skill.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stack