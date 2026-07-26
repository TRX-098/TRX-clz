export function tidyText(text = "") {
  return String(text).trim();
}

export function formatCurrency(amount = 0) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function buildHelp(command) {
  return `*${command.name}*\nKategori: ${command.category}\nTier: ${command.tier}\nCooldown: ${command.cooldown}s\nLimit: ${command.limit}\nDeskripsi: ${command.description}\nUsage: ${command.usage}`;
}
