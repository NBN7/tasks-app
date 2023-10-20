import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description } = await req.json();

    const createdTask = await prisma.task.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(createdTask);
  } catch (error) {
    return NextResponse.json(error);
  }
}
