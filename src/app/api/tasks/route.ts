import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();

  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();

  const createdTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(createdTask);
}
