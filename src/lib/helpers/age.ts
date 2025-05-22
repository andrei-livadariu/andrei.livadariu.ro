export default function age(birthday : Date|string): number {
    if (typeof birthday === 'string') {
        birthday = new Date(birthday);
    }

    const ageDifMs = new Date().getTime() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}