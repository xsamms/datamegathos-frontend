const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...\n');

  // Create admin user
  const hashedPassword = await bcrypt.hash('Admin123#', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'samuel.williams@datamegathos.com' },
    update: {},
    create: {
      email: 'samuel.williams@datamegathos.com',
      name: 'Samuel Williams',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created:');
  console.log(`   Email: ${admin.email}`);
  console.log(`   Password: Admin123#`);
  console.log(`   Role: ${admin.role}`);
  console.log('');
  console.log('⚠️  Change the password after first login!\n');

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
