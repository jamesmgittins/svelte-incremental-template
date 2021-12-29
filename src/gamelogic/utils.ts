const thousand = 1_000;
const million = 1_000_000;
const billion = 1_000_000_000;
const trillion = 1_000_000_000_000;
const quadrilion = 1000000000000000;

/**
 * Function to format a number for display on screen.
 * @param input Number to format
 * @param decimals How many decimals do you want
 */
export function formatNumber(input: number, decimals: number) {
   if (!input) input = 0;
   if (input < 0) return "-" + formatNumber(-1 * input, decimals);
   if (input >= quadrilion)
      return input.toExponential(decimals).replace("+", "");
   if (input >= trillion)
      return (input / trillion).toFixed(decimals) + 'T';
   if (input >= billion)
      return (input / billion).toFixed(decimals) + 'B';
   if (input >= million)
      return (input / million).toFixed(decimals) + 'M';
   if (input >= thousand)
      return (input / thousand).toFixed(decimals) + 'K';

   return input.toFixed(decimals);
}

/**
 * Function to format a number for display on screen.
 * Will only show decimal places when the number is abbreviated.
 * @param input Number to format
 */
export function formatWhole(input: number) {
   if (!input) input = 0;
   if (input < 0) return "-" + formatWhole(-1 * input);
   if (input < thousand) return formatNumber(input, 0);
   return formatNumber(input, 2);
}