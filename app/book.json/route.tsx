export const dynamic = "force-static"

export async function GET() {
  return Response.json([
    { name: '三国演义' },
    { name: '水浒传' },
    { name: '西游记' },
    { name: '红楼梦' },
  ])
}