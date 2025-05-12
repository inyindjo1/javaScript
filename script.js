// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getLearnerData(course, ag, submissions) {
    console.log(submissions[0].learner_id)


    const learner_id = [125, 125, 125, 132, 132]
    let assignment_id =[1,2,3,1,2]
    let score =[47,150,400,39,140]
    console.log(learner_id ); //   this is the orginal
 
let learnerids = [];

for (let i = 0; i < learner_id.length; i++) {
    if (!learnerids.includes(learner_id[i])) {
        learnerids.push(learner_id[i]);
    }
}

// using operators
 
let learners = learnerids.map((id, index) => {
    let student = {
        id: id,
    };
    console.log(id, 'id');

    let assignments = LearnerSubmissions.filter((assignment) => {
        return id === assignment.learner_id;
    });

    console.log(assignments, "assig");

    student.assignments = assignments;
    return student;
});
//[{id:125},{id:132}]

let points1 = AssignmentGroup.assignments[0].points_possible;
let assignmentId1 = LearnerSubmissions[0].assignment_id;
learners[0][1] = LearnerSubmissions[0].submission.score   // Assignment 1

let points2 = AssignmentGroup.assignments[1].points_possible;
let assignmentId2 = LearnerSubmissions[1].assignment_id;
learners[0][2] = LearnerSubmissions[1].submission.score;  // Assignment 2

let points3 = AssignmentGroup.assignments[2].points_possible;
let assignmentId3 = LearnerSubmissions[2].assignment_id;
learners[0][3] = LearnerSubmissions[2].submission.score;  // Assignment 3

// Calculate the average for learner 125
let totalScore = learners[0][1] + learners[0][2] + learners[0][3];
let averageScore = totalScore / 3;
learners[0].avg = averageScore;

console.log(learners);



// [{id:125,1:47,2:150},{id:132,1:39,2:140}
try {
    for (let i = 0; i < learners.length; i++) {
        let student = learners[i];

        if (student.assignments.length === 0) {
            console.warn(`No assignments found for learner_id ${student.learner_id}`);
            continue;
        } else if (student.assignments.length > 5) {
            console.log(`learners ${student.learner_id}  5 and more than assignments.`);
        } else {
            console.log(`learners ${student.learner_id} assignment is normal.`);
        }
    }
} catch (error) {
    console.error('error',error);
}



    // here, we would process this data to achieve the desired result.
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150
        }
    ];

    return result;

}


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);



 