const questions = [
    
    {
            question: "كم مرة ورد ذكر اسم 'محمد' في القرآن الكريم؟",
            answers: ["3 مرات", "4 مرات", "5 مرات", "6 مرات"],
            correct: 1
    },
    {
            question: "من هو النبي الذي كلمه الله مباشرةً؟",
            answers: ["إبراهيم عليه السلام", "موسى عليه السلام", "محمد ﷺ", "عيسى عليه السلام"],
            correct: 1
    },
    {
            question: "ما هو عدد سور القرآن الكريم؟",
            answers: ["100", "112", "114", "120"],
            correct: 2
    },
    {
            question: "ما هو أول ما نزل من القرآن؟",
            answers: ["سورة الفاتحة", "سورة المدثر", "سورة العلق", "سورة الإسراء"],
            correct: 2
    },
    {
            question: "من هو خليل الله؟",
            answers: ["إبراهيم عليه السلام", "موسى عليه السلام", "محمد ﷺ", "عيسى عليه السلام"],
            correct: 0
    },
    {
            question: "ما هو الإعجاز في سورة الكوثر؟",
            answers: ["أقصر سورة في القرآن", "أطول سورة في القرآن", "عدد كلماتها زوجي", "تحوي اسم الله في كل آية"],
            correct: 0
    },
    {
            question: "كم كان عمر النبي ﷺ عندما بُعث بالرسالة؟",
            answers: ["35 سنة", "40 سنة", "45 سنة", "50 سنة"],
            correct: 1
    },
    {
            question: "ما هي السورة التي نزلت كاملة؟",
            answers: ["الرحمن", "المدثر", "المطففين", "الأنفال"],
            correct: 0
    },
    {
            question: "كم عدد الأنبياء الذين ذكروا في القرآن؟",
            answers: ["20", "25", "30", "35"],
            correct: 1
    },
        {
            question: "ما هو العنصر الأهم في العلاقة العاطفية الناجحة؟",
            answers: ["الثقة", "الهدايا", "الرسائل", "الخروج المتكرر"],
            correct: 0
        },
        {
            question: "ما هو أفضل طريقة للتعبير عن الحب؟",
            answers: ["الكلام الجميل", "الأفعال", "الهدايا", "كل ما سبق"],
            correct: 3
        },
        {
            question: "ما هو لون الورد الذي يرمز إلى الحب الحقيقي؟",
            answers: ["الأحمر", "الأبيض", "الأصفر", "الأزرق"],
            correct: 0
        },
        {
            question: "أي من هذه الصفات تُعدّ أساس الحب الحقيقي؟",
            answers: ["التفاهم", "التضحية", "الاحترام", "كل ما سبق"],
            correct: 3
        },
        {
            question: "ماذا تعني عبارة 'الحب من أول نظرة'؟",
            answers: ["حب سريع بدون معرفة مسبقة", "حب يدوم للأبد", "إعجاب فقط", "أسطورة غير حقيقية"],
            correct: 0
        },
        {
            question: "أي من هذه الشخصيات التاريخية اشتهرت بقصة حب عظيمة؟",
            answers: ["قيس وليلى", "روميو وجولييت", "عنترة وعبلة", "كل ما سبق"],
            correct: 3
        },
        {
            question: "ما هو أفضل هدية رومانسية في ذكرى الحب؟",
            answers: ["ورود", "رسالة مكتوبة بخط اليد", "مفاجأة مميزة", "كل ما سبق"],
            correct: 3
        },
        {
            question: "أي من هذه العبارات تعبر عن الحب العميق؟",
            answers: [
                "الحب هو أن ترى النور في عيون من تحب",
                "الحب مجرد كلمة بدون فعل",
                "الحب يعتمد على الظروف",
                "الحب يأتي فقط بعد الزواج"],
            correct: 0
             
        },
    
    {
            question: "ما هي الصلاة التي تُسمى الصلاة الوسطى؟",
            answers: ["الفجر", "الظهر", "العصر", "المغرب"],
            correct: 2
    },        
    {
        question: "ما هي عاصمة فرنسا؟",
        answers: ["روما", "مدريد", "لندن", "باريس"],
        correct: 3
    },
    {
        question: "كم عدد الكواكب في المجموعة الشمسية؟",
        answers: ["7", "8", "9", "10"],
        correct: 1
    },
    {
            question: "ما هو نظام التشغيل الأكثر استخدامًا في أجهزة الحاسوب الشخصية؟",
            answers: ["لينكس", "ماك أو إس", "ويندوز", "أوبونتو"],
            correct: 2
    },
    {
            question: "ما هو بروتوكول نقل النص التشعبي المستخدم في تصفح الويب؟",
            answers: ["FTP", "HTTP", "SMTP", "TCP"],
            correct: 1
        },
        {
            question: "ما هو الجهاز الذي يُستخدم لإخراج البيانات الصوتية من الحاسوب؟",
            answers: ["الطابعة", "الشاشة", "السماعات", "الماوس"],
            correct: 2
        },
        {
            question: "ما هو نوع الذاكرة الذي يفقد البيانات عند انقطاع التيار الكهربائي؟",
            answers: ["ROM", "SSD", "RAM", "HDD"],
            correct: 2
        },
        {
            question: "ما هو الجهاز الذي يُستخدم لإدخال النصوص إلى الحاسوب؟",
            answers: ["الماوس", "لوحة المفاتيح", "الشاشة", "السماعات"],
            correct: 1
        },
        {
            question: "ما هو الامتداد الشائع لملفات الصور؟",
            answers: [".docx", ".mp3", ".jpg", ".exe"],
            correct: 2
        },
        {
            question: "ما هو الجهاز الذي يُستخدم لتوجيه البيانات بين الشبكات المختلفة؟",
            answers: ["المودم", "المحول", "الموجه (راوتر)", "الجسر"],
            correct: 2
        },
        {
            question: "ما هو مصطلح 'البرمجيات الخبيثة' باللغة الإنجليزية؟",
            answers: ["Software", "Hardware", "Malware", "Firmware"],
            correct: 2
        },
        {
            question: "ما هو الجهاز الذي يُستخدم لنسخ البيانات من الأقراص الضوئية؟",
            answers: ["قارئ الأقراص الضوئية", "الطابعة", "الماسح الضوئي", "الكاميرا"],
            correct: 0
        },
        {
            question: "ما هو بروتوكول البريد الإلكتروني المستخدم لإرسال الرسائل؟",
            answers: ["IMAP", "POP3", "SMTP", "HTTP"],
            correct: 2
        }
    
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("question").innerText = "انتهت اللعبة!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("next").style.display = "none";
        document.getElementById("score").style.display = "block";
        document.getElementById("final-score").innerText = score;
        document.getElementById("restart").style.display = "block";
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
        let button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });

    document.getElementById("next").disabled = true;
    timeLeft = 30;
    updateTimer();
    clearInterval(timer);
    timer = setInterval(countdown, 3000);
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    let buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        buttons[selectedIndex].classList.add("correct");
        score++;
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[questions[currentQuestionIndex].correct].classList.add("correct");
    }

    document.getElementById("next").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        checkAnswer(-1);
    } else {
        document.getElementById("time").innerText = timeLeft;
        timeLeft--;
    }
}

function updateTimer() {
    document.getElementById("time").innerText = timeLeft;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
    loadQuestion();
}

window.onload = loadQuestion;