let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("close");


let answers = [
    "机器学习",
    "中国科学院动化",
    "勇于探索，永不停歇",
    "开发深度学习算法、推动计算机视觉和自然语言处理等技术的发展。",
    "保持乐观积极的态度，坚持不懈地努力工作和学习。",
    "通过合理安排时间和工作，保持了良好的工作生活平衡，注重身心健康和家庭关系的维护。"
];

let questions = [
    "李飞飞教授的研究领域涵盖了哪些领域？",
    "李飞飞教授曾在哪所研究所获得博士学位？",
    "李飞飞教授的人生座右铭是什么？",
    "李飞飞教授的贡献包括推动哪些技术的发展？",
    "李飞飞教授面对挑战时保持怎样的态度？",
    "李飞飞教授通过什么方式保持了工作生活平衡？"
];

let selectedNumber = 0;
let score = 0; // 初始化分数为 0

btn.onclick = function () {
    let number = Math.ceil(Math.random() * 8);
    selectedNumber = number;

    // 计算旋转角度
    let rotateDegree = 360 / 8 * (number - 1) + 360 * 5;

    // 添加旋转动画
    container.style.transition = "transform 5s ease-out";
    container.style.transform = "rotate(" + rotateDegree + "deg)";
}

// 监听旋转动画结束事件
container.addEventListener("transitionend", function () {
    if (selectedNumber >= 1 && selectedNumber <= 8) {
        // 确认动画结束后显示弹出框
        showPopup();
    }
});

// 新增函数用于显示弹出框
function showPopup() {
    overlay.style.display = "block";
    popup.style.display = "block";

    // 根据选中的图案显示相应问题
    let questionIndex = selectedNumber - 1;
    let question = questions[questionIndex];
    let answerIndex = questionIndex < answers.length ? questionIndex : answers.length - 1;
    let answer = answers[answerIndex];

    // 找到弹出框中的标题和内容元素，并更新它们的文本内容
    let popupTitle = document.querySelector(".popup-content h2");
    let popupText = document.querySelector(".popup-content p");

    popupTitle.innerText = "surprise card" + selectedNumber; // 将标题更改为 "问题" + 选中的图案编号
    popupText.innerHTML = "<strong>" + question + "</strong><br>" + answer; // 将内容更改为选中的问题和答案
}

// 监听关闭按钮点击事件
closeBtn.onclick = function () {
    // 关闭弹出框
    overlay.style.display = "none";
    popup.style.display = "none";
}
