const phrases = [
    "Individuals and interactions over processes and tools (The Agile Manifesto).",
    "Working software over comprehensive documentation (The Agile Manifesto).",
    "Customer collaboration over contract negotiation (The Agile Manifesto).",
    "Responding to change over following a plan (The Agile Manifesto).",
    "The Agile Manifesto was drawn up in February (11-13), 2001 at a Ski resort in the mountains of Utah.",
    "Toyota first studied the use of Kanban in the 1940's Japanese supermarkets were already using the technique.",
    "Scrum the other famous Agile framework was first published in 1995.",
    "Kanban made famous by Toyota who first implemented a Kanban system in 1953.",
    "Kanban underpins Toyota's Just In Time (JIT) Principle: only what is needed, when it is needed, and in the amount needed.",
    "Kanban was used before Toyota by Japanese supermarkets to ensure adequate stock levels to meet customer demand.",
    "Kanban is still sometimes called the “Supermarket Method”.",
    "Kanban is just one Framework for 'being agile'.",
    "Hewlett-Packard was one of the first companies outside of Japan to use Kanban, calling it 'Stockless Production'.",
    "Kanban is a tool for visualising workflow.",
    "Kanban is used to identify bottlenecks and delays in the system.",
    "Kanban identifies excessive 'stock' buildup.",
    "Kanban is a pull and not push system.",
    "Kanban Mids administrative overhead.",
    "Kanban: no more task allocation!",
    "Teams concentrate on WIP: maintain focus (less context switching).",
    "Kanban focuses on finishing work, not starting work.",
    "Stop starting, start finishing.",
    "The Kanban Board can be physical or virtual.",
    "Physical task boards are often called Information Radiators.",
    "Virtual boards are known as Information Refrigerators.",
    "WIP (work in progress) restricts work in any one lane.",
    "You are only allowed to pull work if capacity is freed.",
    "As WIP limits are reduced work flow increases.",
    "Lead Time: from a feature being requested to delivery.",
    "Reducing WIP decreases lead time.",
    "Cycle time: average time to complete all tickets in progress.",
    "Use Kanban to learn new ways to solve new problems.",
    "Kanban offers a way to organize the 'chaos' that surrounds many teams.",
    "Kanban aids uncovering workflow and process problems.",
    "Kanban core rules are understanding, agreement and respect.",
    "Agree to pursue incremental change.",
    "The Kanban approach is designed to meet minimal resistance: it encourages continuous small incremental changes.",
    "Consider imposing a 'Changes in Progress' limit as you would a 'Work In Progress' limit.",
    "Respect the current process, roles, responsibilities and job titles.",
    "Kanban recognizes that there is value in the existing process.",
    "Kanban encourages small incremental changes that are understood and monitored.",
    "Incremental changes tend to create less fear and encourages broader support.",
    "Encourage leadership at all levels.",
    "You don't need to be a manager or team lead to be a leader.",
    "Some of the best changes come from those on the 'front line'.",
    "Everybody should be encouraged to develop a mindset of continual improvement (Kaizen).",
    "Visualize the Workflow.",
    "You have to understand the workflow before you can improve.",
    "Model your incoming requests for work.",
    "Types of requests: fixed Date, expedite, standard.",
    "Limit Work In Progress (WIP) at all stages of the Kanban system.",
    "Ensure that work is only pulled when capacity allows.",
    "Kanban is a system to create positive change.",
    "You need to know what to change before you start.",
    "When changes are made analyse and understand the effect (use metrics).",
    "Repeat.",
    "It's a journey: as soon as you fix your most important issue your 2nd issue is now the biggest issue.",
    "Make Process Policies Explicit.",
    "You can't 'safely' improve something you don't understand.",
    "The existing process needs to be well understood… by everyone.",
    "Try not to make discussions emotional or subjective.",
    "Try and avoid situations where individuals feel they have to 'Stand their ground'.",
    "Make small well communicated consensual changes.",
    "Improve collaboratively (And Monitor).",
    "You are missing the point if you are not continually improving but just doing the Kanban method.",
    "Changes should be made using a scientific approach.",
    "Use metrics to understand the effect on workflow.",
    "Retrospectives: Inspect & Adapt.",
    "Hold regular retrospectives also known as Kaizen (Continuous improvement).",
    "Retrospectives were made famous by the Scrum Framework.",
    "Retrospectives are not prescribed in Kanban yet widely used.",
    "Look at the metrics gathered and discuss the why.",
    "Don't do Agile… Be Agile!",
    "Agile, Scrum and Kanban don't prescribe software development practices.",
    "Remember Scrum and Kanban are used outside of the world of software development.",
    "Kanban comes from food replenishment.",
    "Kanban does not talk about portfolio management, governance or quality process procedures.",
];

const catsUpper = '\n\n' +
    '                      /^--^\\     /^--^\\     /^--^\\\n' +
    '                      \\____/     \\____/     \\____/\n' +
    '                     /      \\   /      \\   /      \\\n' +
    '                    |        | |        | |        |\n' +
    '                     \\__  __/   \\__  __/   \\__  __/\n'
;

const catsMidLLL =
    '|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^|\\ \\|^|^|^|^\\ \\^|^|^|^|^|^|^|^|^|^|^|^|\n' +
    '| | | | | | | | | | | | |\\ \\| | | | \\ \\ | | | |\\ \\| | | | | | | | | | | |\n' +
    '#########################/ /########/ /########/ /#######################\n' +
    '| | | | | | | | | | | | |\\/ | | | | \\/| | | | |\\/ | | | | | | | | | | |P|\n';
const catsMidLLR =
    '|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^|\\ \\|^|^|^|/ /|^|^|^|^|^|^|^|^|^|^|^|^|\n' +
    '| | | | | | | | | | | | |\\ \\| | | | \\ \\ | | / / | | | | | | | | | | | | |\n' +
    '#########################/ /########/ /#####\\ \\##########################\n' +
    '| | | | | | | | | | | | |\\/ | | | | \\/| | | |\\/ | | | | | | | | | | | |P|\n';
const catsMidLRL =
    '|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^/ /^|^|^|^|^\\ \\^|^|^|^|^|^|^|^|^|^|^|^|\n' +
    '| | | | | | | | | | | | |\\ \\| | |/ /| | | | | |\\ \\| | | | | | | | | | | |\n' +
    '#########################/ /#####\\ \\###########/ /#######################\n' +
    '| | | | | | | | | | | | |\\/ | | | \\/| | | | | |\\/ | | | | | | | | | | |P|\n';
const catsMidLRR =
    '|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^/ /^|^|^|^|/ /|^|^|^|^|^|^|^|^|^|^|^|^|\n' +
    '| | | | | | | | | | | | |\\ \\| | |/ /| | | | / / | | | | | | | | | | | | |\n' +
    '#########################/ /#####\\ \\########\\ \\##########################\n' +
    '| | | | | | | | | | | | |\\/ | | | \\/| | | | |\\/ | | | | | | | | | | | |P|\n';
const catsMidRLR =
    '|^|^|^|^|^|^|^|^|^|^|^|/ /|^|^|^|^|\\ \\|^|^|^|/ /|^|^|^|^|^|^|^|^|^|^|^|^|\n' +
    '| | | | | | | | | | | / / | | | | | \\ \\ | | / / | | | | | | | | | | | | |\n' +
    '######################\\ \\###########/ /#####\\ \\##########################\n' +
    '| | | | | | | | | | | |\\/ | | | | | \\/| | | |\\/ | | | | | | | | | | | |P|\n';
const catsMidRRR =
    '|^|^|^|^|^|^|^|^|^|^|^|/ /|^|^|^|^/ /^|^|^|^|/ /|^|^|^|^|^|^|^|^|^|^|^|^|\n' +
    '| | | | | | | | | | | / / | | | |/ /| | | | / / | | | | | | | | | | | | |\n' +
    '######################\\ \\########\\ \\########\\ \\##########################\n' +
    '| | | | | | | | | | | |\\/ | | | | \\/| | | | |\\/ | | | | | | | | | | | |P|\n';
const catsMid =
    [catsMidLLL, catsMidLLR, catsMidLRL, catsMidLRR, catsMidRLR, catsMidRRR];
const catsLower =
    '|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|J|\n';
