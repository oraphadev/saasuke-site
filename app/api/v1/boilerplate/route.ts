import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'

const ZIP_FILE_PATH = './boilerplates/profile.zip'

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get('token')

  if (token === '12345') {
    const fileBuffer = await fs.promises.readFile(ZIP_FILE_PATH)
    const zipBlob = new Blob([fileBuffer], { type: 'application/zip' })
    const headers = new Headers()

    headers.set('Content-Type', 'application/zip')
    headers.set('Content-Disposition', 'attachment; filename=profile.zip')

    return new NextResponse(zipBlob, { status: 200, headers })
  }

  return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
}
