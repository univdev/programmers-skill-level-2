function solution(skill, skill_trees) {
  const skills = skill.split('');
  return skill_trees.filter((items) => {
      const count = items.split('').filter((item) => skills.includes(item)).length;
      let min = -1;
      for (let i = 0; i < count; i += 1) {
          const index = items.indexOf(skills[i]);
          if (min < index) {
              min = index;
          } else {
              return false;
          }
      }
      return true;
  }).length;
};
