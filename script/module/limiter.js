export function limitDecimals(number, maxDecimals, maxDigits) {
    const numberString = number.toString();
    const parts = numberString.split('.');
    
    if (parts.length > 1) {
        const decimalPart = parts[1].slice(0, maxDecimals);
        const newNumberString = `${parts[0]}.${decimalPart}`;
        
        if (newNumberString.length > maxDigits) {
            return number.toFixed(maxDecimals); // Si excede el límite total de dígitos, redondeamos el número
        }
        
        return newNumberString;
    } else {
        if (numberString.length > maxDigits) {
            return number.toFixed(maxDecimals);
        }
        
        return numberString;
    }
}