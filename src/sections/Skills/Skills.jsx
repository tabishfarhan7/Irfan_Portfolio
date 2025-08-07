import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
  <h1 className="sectionTitle">Skills</h1>

  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="AutoCAD" />
    <SkillList src={checkMarkIcon} skill="SolidWorks" />
    <SkillList src={checkMarkIcon} skill="ANSYS" />
    <SkillList src={checkMarkIcon} skill="CATIA" />
    <SkillList src={checkMarkIcon} skill="MATLAB" />
  </div>

  <hr />

  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Thermodynamics" />
    <SkillList src={checkMarkIcon} skill="Fluid Mechanics" />
    <SkillList src={checkMarkIcon} skill="Strength of Materials" />
    <SkillList src={checkMarkIcon} skill="Heat Transfer" />
  </div>

  <hr />

  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Manufacturing Processes" />
    <SkillList src={checkMarkIcon} skill="Mechanical Design" />
    <SkillList src={checkMarkIcon} skill="3D Modeling" />
    <SkillList src={checkMarkIcon} skill="Project Management" />
    {/* <SkillList src={checkMarkIcon} skill="MS Excel (Engineering Use)" /> */}
  </div>
</section>

  );
}

export default Skills;
