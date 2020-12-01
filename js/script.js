let attempt=0;
let score=0;
let wrong=0;
let index=0;

let quiz = [
    {
        question: "What does HTML stand for?",
        option: [
            "Hyper Tag Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language",
        ],
        answer: 2,
    },
    {
        question: "What does CSS stand for?",
        option: [
            "Computing Style Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Creative Styling Sheet",
        ],
        answer: 3,
    },
    {
        question: "Where should a CSS file be referenced in a HTML file?",
        option: [
            "Before any HTML code",
            "After all HTML code",
            "Inside the head section",
            "Inside the body section",
        ],
        answer: 3,
    },
    {
        question:
            "What is the correct format for aligning written content to the center of the page in CSS?",
        option: [
            "Text-align:center;",
            "Font-align:center;",
            "Text:align-center;",
            "Font:align-center;",
        ],
        answer: 1,
    },
    {
        question:
            "What is the correct format for changing the background colour of a div in CSS?",
        option: [
            "Bg-color:red;",
            "bg:red;",
            "Background-colour:red;",
            "Background-color:red;",
        ],
        answer: 4,
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        option: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: 4,
    },
    {
        question: "Which is the correct CSS syntax?",
        option: [
            "Body {color: black}",
            "{body;color:black}",
            "{body:color=black(body}",
            "body:color=black",
        ],
        answer: 1,
    },
    {
        question:
            "In CSS, what is the correct option to select all the tags on a page?",
        option: ["<p> { }", ".p { }", "#p { }", "* { }"],
        answer: 4,
    },
    {
        question: "Select the correct HTML tag to make a text italic?",
        option: ["Italic", "II", "IT", "I"],
        answer: 4,
    },
    {
        question: "Select the correct HTML tag to make a text bold.",
        option: ["bo", "bb", "b", "bold"],
        answer: 3,
    },
];
let questions= quiz.sort(function(){
    return 0.5 - Math.random();
});
let totalquestion=questions.length;

$(function(){
    let totalTime=200;
    let min=0;
    let sec=0;
    let counter=0;

    let timer = setInterval(function(){
        counter++;
        min=Math.floor( (totalTime-counter)/60);
        sec=totalTime-min*60-counter;

        $(".timerBox span").text(min+":"+sec);
        if(counter==totalTime){
            alert("Time's up. Press OK To show the result.");
            result();
            clearInterval(timer);
        }
    },1000);
    printQuestion(index);
}) ;
function printQuestion(i)
{
    $(".questionBox").text(questions[i].question);
    $(".optionBox Span").eq(0).text(questions[i].option[0]);
    $(".optionBox Span").eq(1).text(questions[i].option[1]);
    $(".optionBox Span").eq(2).text(questions[i].option[2]);
    $(".optionBox Span").eq(3).text(questions[i].option[3]);
}

function checkAnswer(option){
    attempt++;
    let optionClicked=$(option).data("opt");
    if(optionClicked==questions[index].answer){
        $(option).addClass("right");
        score=score+1;
    }
    else{
        $(option).addClass("wrong");
        wrong=wrong+1;

    }
    $(".scoreBox span").text(score);

    $(".optionBox span").attr("onclick","");
}

function showNext(){
    if(index>=(questions.length-1)){
        showResult(0);
        return;
    }
    index++;
    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick","checkAnswer(this)");
    printQuestion(index);
}

function showResult(j){
    if (j==1 && index<questions.length -1 && !confirm("Quiz has not finished yet. Press OK for skip")){
        return;
            }
        result();
   
}

function result(){
    $("#questionScreen").hide();
    $("#resultScreen").show();
    $("#totalQuestion").text(totalquestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswer").text(score);
    $("#wrongAnswer").text(wrong);


}