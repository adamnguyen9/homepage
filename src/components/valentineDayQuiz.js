import * as React from 'react'

export function ValentineDayQuiz(props) {
    const [score, setScore] = React.useState(0)

    function calculateScore() {
        var score = 0

        var answer1 = document.querySelector('input[name="q1"]:checked')
        var answer2 = document.querySelector('input[name="q2"]:checked')
        var answer3 = document.querySelector('input[name="q3"]:checked')
        var answer4 = document.querySelector('input[name="q4"]:checked')
        var answer5 = document.querySelector('input[name="q5"]:checked')
        var answer6 = document.querySelector('input[name="q6"]:checked')
        var answer7 = document.querySelector('input[name="q7"]:checked')
        var answer8 = document.querySelector('input[name="q8"]:checked')
        var answer9 = document.querySelector('input[name="q9"]:checked')
        var answer10 = document.querySelector('input[name="q10"]:checked')
        var answer11 = document.querySelector('input[name="q11"]:checked')
        var answer12 = document.querySelector('input[name="q12"]:checked')
        var answer13 = document.querySelector('input[name="q13"]:checked')
        var answer14 = document.querySelector('input[name="q14"]:checked')
        var answer15 = document.querySelector('input[name="q15"]:checked')
        var answer16 = document.getElementById('q16').value
        var answer17 = document.getElementById('q17').value
        var answer18 = document.getElementById('q18').value
        var answer19 = document.getElementById('q19').value
        var answer20 = document.querySelector('input[name="q20"]:checked')

        if (answer1 && answer1.value === 'C') score++
        if (answer2 && answer2.value === 'B') score++
        if (answer3 && answer3.value === 'B') score++
        if (answer4 && answer4.value === 'D') score++
        if (answer5 && answer5.value === 'B') score++
        if (answer6 && answer6.value === 'A') score++
        if (answer7 && answer7.value === 'D') score++
        if (answer8 && answer8.value === 'B') score++
        if (answer9 && answer9.value === 'C') score++
        if (answer10 && answer10.value === 'D') score++
        if (answer11 && answer11.value === 'True') score++
        if (answer12 && answer12.value === 'True') score++
        if (answer13 && answer13.value === 'True') score++
        if (answer14 && answer14.value === 'False') score++
        if (answer15 && answer15.value === 'False') score++
        if (answer16 && answer16 === 'Japan') score++
        if (answer17 && answer17 === '11/09/2024') score++
        if (answer18 && Number(answer18) === 1) score++
        if (answer19 && Number(answer19) <= 5) score++
        if (answer20) score++

        setScore(score)
        document.getElementById('result').style.display = 'block'
    }
    return (
        <div class="quiz-container">
            <h2 style={{ color: 'magenta' }}>
                How much do you really know about your valentine?
            </h2>

            <form id="quizForm">
                <div class="question">
                    <label for="q1">What is my favorite color?</label>
                    <div class="options">
                        <input type="radio" name="q1" value="A" />
                        Green
                        <br />
                        <input type="radio" name="q1" value="B" />
                        Yellow
                        <br />
                        <input type="radio" name="q1" value="C" />
                        Blue
                        <br />
                        <input type="radio" name="q1" value="D" />
                        Purple
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q2">What is my favorite soccer team?</label>
                    <div class="options">
                        <input type="radio" name="q2" value="A" />
                        FC Barcelona
                        <br />
                        <input type="radio" name="q2" value="B" />
                        Real Madrid
                        <br />
                        <input type="radio" name="q2" value="C" />
                        Atletico Madrid
                        <br />
                        <input type="radio" name="q2" value="D" />
                        Liverpool FC
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q3">What year was I born in?</label>
                    <div class="options">
                        <input type="radio" name="q3" value="A" />
                        1999
                        <br />
                        <input type="radio" name="q3" value="B" />
                        2000
                        <br />
                        <input type="radio" name="q3" value="C" />
                        2001
                        <br />
                        <input type="radio" name="q3" value="D" />
                        2002
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q4">Where was I born?</label>
                    <div class="options">
                        <input type="radio" name="q4" value="A" />
                        Washington, D.C.
                        <br />
                        <input type="radio" name="q4" value="B" />
                        Chester, Virginia
                        <br />
                        <input type="radio" name="q4" value="C" />
                        North Wilkesboro, North Carolina
                        <br />
                        <input type="radio" name="q4" value="D" />
                        Richmond, Virginia
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q5">What college did I go to?</label>
                    <div class="options">
                        <input type="radio" name="q5" value="A" />
                        University of Virginia
                        <br />
                        <input type="radio" name="q5" value="B" />
                        The University of North Carolina at Chapel Hill
                        <br />
                        <input type="radio" name="q5" value="C" />
                        North Carolina State University
                        <br />
                        <input type="radio" name="q5" value="D" />
                        Virginia Commonwealth University
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q6">
                        Which one of these sports did I not play before college
                        (on an actual organized team)?
                    </label>
                    <div class="options">
                        <input type="radio" name="q6" value="A" />
                        Basketball
                        <br />
                        <input type="radio" name="q6" value="B" />
                        Soccer
                        <br />
                        <input type="radio" name="q6" value="C" />
                        Track
                        <br />
                        <input type="radio" name="q6" value="D" />
                        Swimming
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q7">
                        If I wasn't a software engineer, I would have been this
                        occupation.
                    </label>
                    <div class="options">
                        <input type="radio" name="q7" value="A" />
                        Teacher
                        <br />
                        <input type="radio" name="q7" value="B" />
                        Nurse
                        <br />
                        <input type="radio" name="q7" value="C" />
                        Lawyer
                        <br />
                        <input type="radio" name="q7" value="D" />
                        None of the above
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q8">
                        On a dark night in the summer of 2013, the scout boat I
                        was on started to drift south to Cuba. Who's fault was
                        it?
                    </label>
                    <div class="options">
                        <input type="radio" name="q8" value="A" />
                        Me
                        <br />
                        <input type="radio" name="q8" value="B" />
                        Charles
                        <br />
                        <input type="radio" name="q8" value="C" />
                        The Captain
                        <br />
                        <input type="radio" name="q8" value="D" />
                        The Scoutmaster
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q9">How many siblings do I have?</label>
                    <div class="options">
                        <input type="radio" name="q9" value="A" />
                        3
                        <br />
                        <input type="radio" name="q9" value="B" />
                        2
                        <br />
                        <input type="radio" name="q9" value="C" />
                        1
                        <br />
                        <input type="radio" name="q9" value="D" />
                        None
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q10">
                        Who would I consider the role model in my life?
                    </label>
                    <div class="options">
                        <input type="radio" name="q10" value="A" />
                        My mom
                        <br />
                        <input type="radio" name="q10" value="B" />
                        My uncle
                        <br />
                        <input type="radio" name="q10" value="C" />
                        My brother
                        <br />
                        <input type="radio" name="q10" value="D" />
                        My dad
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q11">
                        I played pit percussion in band in high school. True or
                        false?
                    </label>
                    <div class="options">
                        <input type="radio" name="q11" value="True" />
                        True
                        <br />
                        <input type="radio" name="q11" value="False" />
                        False
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q12">
                        I've been suspended before in middle/high school. True
                        or false?
                    </label>
                    <div class="options">
                        <input type="radio" name="q12" value="True" />
                        True
                        <br />
                        <input type="radio" name="q12" value="False" />
                        False
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q13">
                        I've been to more than 5 countries (excluding the U.S.
                        and Vietnam). True or false?
                    </label>
                    <div class="options">
                        <input type="radio" name="q13" value="True" />
                        True
                        <br />
                        <input type="radio" name="q13" value="False" />
                        False
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q14">
                        My favorite fast food restaurant is McDonald's. True or
                        false?
                    </label>
                    <div class="options">
                        <input type="radio" name="q14" value="True" />
                        True
                        <br />
                        <input type="radio" name="q14" value="False" />
                        False
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q15">
                        I've lived in the state of Virginia for 4 years of my
                        life now. True or false?
                    </label>
                    <div class="options">
                        <input type="radio" name="q15" value="True" />
                        True
                        <br />
                        <input type="radio" name="q15" value="False" />
                        False
                        <br />
                    </div>
                </div>

                <div class="question">
                    <label for="q16">
                        Which country would I want to go to next (apart from
                        Vietnam)?
                    </label>
                    <input type="text" id="q16" name="q16" />
                </div>

                <div class="question">
                    <label for="q17">
                        What is our anniversary (MM/DD/YYYY)?
                    </label>
                    <input
                        type="text"
                        id="q17"
                        name="q17"
                        placeholder="MM/DD/YYYY"
                    />
                </div>

                <div class="question">
                    <label for="q18">
                        On a scale of 1 to 10, how hot do I like my food?
                    </label>
                    <input type="text" id="q18" name="q18" />
                </div>

                <div class="question">
                    <label for="q19">
                        On a scale of 1 to 10, how much do I like my current
                        job?
                    </label>
                    <input type="text" id="q19" name="q19" />
                </div>

                <div class="question">
                    <label for="q20">I love you?</label>
                    <div class="options">
                        <input type="radio" name="q20" value="Yes" />
                        Yes
                    </div>
                </div>

                <button
                    type="button"
                    class="submit-btn"
                    onClick={calculateScore}
                >
                    Submit
                </button>
                <br />
                <br />
                <button
                    type="button"
                    class="back-btn"
                    onClick={(e) => {
                        e.preventDefault()
                        props.setValentineDayQuizClick(false)
                    }}
                >
                    Back
                </button>
            </form>

            <div id="result" class="score" style={{ display: 'none' }}>
                Your Score: <span id="score">{score}</span> / 20
            </div>
        </div>
    )
}
