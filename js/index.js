function change(){
    document.body.style.cursor="url('img/UI/Click.png'),auto";
}
function changeback(){
    document.body.style.cursor="url('img/UI/Cursor.png'),auto";
}

function createSkillPlaceholders(totalBoxes = 42) {
    const container = document.getElementById('ContainerSkill');
    if (!container) return;
    const existing = container.getElementsByClassName('skillBox').length;
    for (let i = existing; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.className = 'skillBox';
        const img = document.createElement('img');
        img.className = 'iconeSkill';
        img.src = 'img/UI/emptyBox.png';
        img.width = 36;
        img.height = 36;
        box.appendChild(img);
        container.appendChild(box);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createSkillPlaceholders();
});

