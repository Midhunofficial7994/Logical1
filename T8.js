
const day = 'Wednesday';
let message;


switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        message = 'It\'s a weekday.';
        break;
    case 'Saturday':
    case 'Sunday':
        message = 'It\'s a weekend!';
        break;
    default:
        message = 'Invalid day!';
}

console.log(message);
