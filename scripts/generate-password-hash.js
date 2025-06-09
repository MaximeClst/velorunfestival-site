import bcrypt from "bcryptjs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🔐 Générateur de hash de mot de passe sécurisé\n");

rl.question("Entrez le mot de passe admin : ", (password) => {
  const saltRounds = 12;
  const hash = bcrypt.hashSync(password, saltRounds);

  console.log("\n✅ Hash généré avec succès !");
  console.log("\n📋 Copiez ces variables dans votre fichier .env.local :\n");
  console.log(`ADMIN_EMAIL=votre-email@example.com`);
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  console.log(`ADMIN_NAME=Votre Nom Admin`);

  console.log("\n⚠️  IMPORTANT :");
  console.log("- Ne partagez jamais ces informations");
  console.log("- N'ajoutez jamais le fichier .env.local au git");
  console.log("- Utilisez des mots de passe forts en production");

  rl.close();
});
