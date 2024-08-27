const levenschteinRecursive = (s1, s2, m, n) => {
    if (m===0){
        return n;
    } else if (n===0){
        return m;
    }

    if (s1[m-1] === s2[n-1]){
        return levenschteinRecursive(s1, s2, m-1, n-1);
    }

    return 1 + Math.min(
        levenschteinRecursive(s1, s2, m, n-1),
        levenschteinRecursive(s1, s2, m-1, n),
        levenschteinRecursive(s1, s2, m-1, n-1)
    );
}

const levenschtein = (s1, s2) => {
    return levenschteinRecursive(s1, s2, s1.length, s2.length);
}

const evaluate = (s, person) => {
    const searchWords = s.split(" ");
    let personWords = [];

    personWords = personWords.concat(person.fName.split(" "));
    personWords = personWords.concat(person.sName.split(" "));
    personWords = personWords.concat(person.nickName.split(" "));
    personWords = personWords.concat(person.workStudy.split(" "));
    personWords = personWords.concat(person.whereMet.split(" "));
    for (let interest of person.interests){
        personWords = personWords.concat(interest.split(" "));
    }
    for (let characteristic of person.characteristics){
        personWords = personWords.concat(characteristic.split(" "));
    }
    personWords = personWords.concat(person.further.split(" "));
    personWords = personWords.filter((s) => s.length!==0);
    personWords = personWords.map(s => s.toLowerCase());
    
    let matchCount = 0
    for (let searchWord of searchWords){
        for (let personWord of personWords){
            if (levenschtein(searchWord, personWord)<3){
                matchCount++;
            }
        }
    }

    return matchCount;
}

const sortPeople = (s, originalPeople) => {
    const people = [...originalPeople];

    const scores = people.map((p) => {
        return evaluate(s, p);
    });
    
    // Bubble sort
    for (var i=0; i < people.length; i++){
        for (var j=0; j < people.length; j++){
            if (scores[j] < scores[j+1]){
                var tempP = people[j];
                people[j] = people[j+1];
                people[j+1] = tempP;
                var tempS = scores[j];
                scores[j] = scores[j+1];
                scores[j+1] = tempS;
            }
        }
    }
    return people;
}

export default sortPeople;