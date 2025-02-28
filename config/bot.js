require('dotenv').config();
const { Telegraf } = require('telegraf');
const Student =require('../models/student');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);


// Start command
bot.start(async (ctx) => {
    ctx.reply("Welcome to the Class Notifier! Use /register to sign up.");
  });
  
  // Register student
  bot.command("register", async (ctx) => {
    const telegram_id = ctx.from.id;
    console.log("Student model:", Student);
    const student = await Student.findOne({ where: { telegram_id: String(telegram_id) } });
  
    if (student) {
      return ctx.reply("You're already registered!");
    }
  
    ctx.reply("Please provide your name in this format:\n\n/register John Doe john@example.com");
  });
  
  bot.hears(/^\/register (.+) (.+)$/, async (ctx) => {
    const telegram_id = ctx.from.id;
    const [name, email] = ctx.match.slice(1);
  
    try {
      await Student.create({ name, email, telegram_id, program_id: 1, department_id: 1 });
      ctx.reply("Registration successful!");
    } catch (error) {
      console.error("Error registering student:", error);
      ctx.reply("Registration failed. Try again later.");
    }
  });
  
  bot.launch();
  console.log("Bot is running...");

module.exports = bot;
