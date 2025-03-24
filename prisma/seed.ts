import { Day, PrismaClient, UserSex } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin1",
      username: "admin1",
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin2",
      username: "admin2",
    },
  });

 
  // Project
  const projectsData = [
    { name: "Mathematics", deadLine: new Date("2025-12-31") },
    { name: "Science", deadLine: new Date("2025-12-20") },
    { name: "English", deadLine: new Date("2025-11-30") },
    { name: "History", deadLine: new Date("2025-11-15") },
    { name: "Geography", deadLine: new Date("2025-10-30") },
  ];

  for (const project of projectsData) {
    await prisma.projects.create({ data: project });
  }

  // Management
  for (let i = 1; i <= 10; i++) {
    await prisma.management.create({
      data: {
        id: `management${i}`,
        username: `management${i}`,
        name: `ManagerName${i}`,
        surname: `ManagerSurname${i}`,
        email: `manager${i}@example.com`,
        phone: `555-000${i}`,
        address: `Management Address ${i}`,
        bloodType: "A+",
        sex: i % 2 === 0 ? "MALE" : "FEMALE",
        birthday: new Date(`1990-01-${String(i).padStart(2, '0')}`),
        projects: { connect: [{ id: (i % projectsData.length) + 1 }] },
      },
    });
  }



  // Employee
  for (let i = 1; i <= 30; i++) {
    await prisma.employees.create({
      data: {
        id: `employee${i}`,
        username: `employee${i}`,
        name: `EmployeeName${i}`,
        surname: `EmployeeSurname${i}`,
        email: `employee${i}@example.com`,
        phone: `555-100${i}`,
        address: `Employee Address ${i}`,
        bloodType: "O-",
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        birthday: new Date(`1990-01-${String(i).padStart(2, '0')}`),
        managerId: `management${(i % 10) + 1}`,
        projects: { connect: [{ id: (i % projectsData.length) + 1 }] },
      },
    });
  }




  // EVENT
  for (let i = 1; i <= 5; i++) {
    await prisma.events.create({
      data: {
        title: `Event ${i}`, 
        description: `Description for Event ${i}`, 
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)), 
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)), 
        
      },
    });
  }

  // ANNOUNCEMENT
  for (let i = 1; i <= 5; i++) {
    await prisma.announcements.create({
      data: {
        title: `Announcement ${i}`, 
        description: `Description for Announcement ${i}`, 
        date: new Date(), 
        
      },
    });
  }

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });