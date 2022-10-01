const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(btn =>{
    btn.addEventListener('click',(idx)=>{
        const styles = idx.currentTarget.classList;
        if(styles.contains('decrease'))
        {
            count--;
        }
        else if(styles.contains('increase'))
        {
            count++;
        }
        else if(styles.contains('reset'))
        {
            count = 0;
        }
        value.textContent = count;
        if(count < 0)
        {
            value.style.color = "red";
        }
        if(count > 0)
        {
            value.style.color = "green";
        }
        if(count === 0)
        {
            value.style.color = "#222"
        }
    })
});