 const Player = document.querySelectorAll('.selection');
const button = document.querySelectorAll('button')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
// const result = document.querySelectorAll('.gameplay')
const adding = document.getElementById('resulNotif');

function ComputerChoice() {
    const computer = Math.ceil(Math.random() * 3); // antara 1 s.d 3

    if (computer == 1) return 'batu';
    if (computer == 2) return 'kertas';
    return 'gunting';
}

function getResult (comp, player) {
    if (player == 'batu' && comp == 'gunting') {
        return 'MENANG';
    } else if (player == 'batu' && comp == 'kertas') {
        return 'KALAH';
    } else if (player == 'kertas' && comp == 'batu') {
        return 'MENANG';
    } else if (player == 'kertas' && comp == 'gunting') {
        return 'KALAH';
    } else if (player == 'gunting' && comp == 'kertas') {
        return 'MENANG';
    } else if (player == 'gunting' && comp == 'batu') {
        return 'KALAH';
    } else {
        return 'SERI';
    }
}

Player.forEach(function(choice) {
    choice.addEventListener('click', function() {
        const CompChoice = ComputerChoice();
        const playerChoice = choice.id;
        const result = getResult(CompChoice, playerChoice);

        if (CompChoice == 'batu') {
            rock.classList.add('active');
        }else if (CompChoice == 'kertas') {
            paper.classList.add('active');
        }else {
            scissor.classList.add('active');
        }

        if (result == 'MENANG') {
            adding.classList.add('rectangle1');
            $(".rectangle1").append("<h4>PLAYER WIN</h4>");
        } else if (result == 'KALAH') {
            adding.classList.add('rectangle2');
            $(".rectangle2").append("<h4>COMPUTER WIN</h4>");
        } else {
            adding.classList.add('rectangle3');
            $(".rectangle3").append("<h4>DRAW</h4>");
        }

        console.log('player : ' + playerChoice);
        console.log('comp : ' + CompChoice);
        console.log('result : ' + result);
    });
});

function Removing () {
    let h1 = document.getElementById('removing');
    h1.remove()
}
