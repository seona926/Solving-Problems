def solution(skill, skill_trees):
    change = ''
    for i in range(len(skill_trees)):
        for j in range(len(skill_trees[i])):
            if skill_trees[i][j] in skill:
                change+=skill_trees[i][j]
        skill_trees[i] = change
        change = ''
    print(skill_trees)
    collect_skills = []
    for i in range(len(skill)):
        collect_skills.append('')
        for j in range(i+1):
            collect_skills[i]+=skill[j]
            
    print(collect_skills)
    
    count = 0
    for i in skill_trees:
        if i in collect_skills or not i:
            count += 1
            
    return count