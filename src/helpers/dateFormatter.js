const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dateFormatter = ({ date = '2022-12-18' } = {}) => {
    
    const newDate = new Date(date);
    
    return `${MONTHS[newDate.getMonth()]} ${newDate.getDate()} ${newDate.getFullYear()}`;

}

export const hourFormatter = ({ date = '2022-12-18' } = {}) => {

    const newDate = new Date(date);
    const timeSystem = newDate.getHours() >= 0 && newDate.getHours() < 12 ? 'AM' : 'PM';
    const hour = newDate.getHours() >= 0 && newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours(); 
    const minutes = newDate.getMinutes() >= 0 && newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes();

    return `${hour}:${minutes} ${timeSystem}`;

}