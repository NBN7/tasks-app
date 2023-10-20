import { NextResponse, type NextRequest } from "next/server";

import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { prisma } from "@/libs/prisma";

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const task = await prisma.task.findUniqueOrThrow({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const toUpdate = await req.json();

    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: toUpdate,
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(deletedTask);
  } catch (error) {
    return NextResponse.json(error);
  }
}
