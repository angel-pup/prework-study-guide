var topics = ['HTML', 'CSS', 'Git',  'JavaScript'];
let randomTopic = topics[Math.floor(Math.random() * topics.length)]

function listTopics() {
    topics.forEach((x) => console.log(x));
}

function selectTopic(topic) {
        switch(topic) {
        case 'HTML':
            console.log("Let's study HTML!");
            break;
        case 'CSS':
            console.log("Let's study CSS!");
            break;
        case 'Git':
            console.log("Let's study Git!");
            break;
        case 'JavaScript':
            console.log("Let's study JavaScript!");
            break;
        default:
            console.log("Please Try Again!");
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic(randomTopic);