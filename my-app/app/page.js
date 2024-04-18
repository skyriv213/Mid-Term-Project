/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V3kYKBV79XZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-[60px] px-4 border-b bg-white md:px-6 dark:bg-gray-950">
        <nav className="flex items-center space-x-4">
          <Link className="text-lg font-semibold dark:text-gray-50" href="#">
            Acme Inc
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link
            className="rounded-full flex h-8 w-8 items-center justify-center overflow-hidden border-2 border-gray-100 dark:border-gray-800"
            href="#"
          >
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-7xl grid gap-4 px-4 md:grid-cols-2 md:gap-8 md:px-6 lg:gap-12">
          <div className="flex flex-col items-center justify-center py-12 space-y-2 md:items-start md:space-y-4 md:py-16 md:space-y-0">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl/none">Hi, I'm Emily</h1>
              <p className="text-gray-500 dark:text-gray-400">Product Designer</p>
            </div>
            <div className="grid gap-4 text-xl prose lg:grid-cols-2 lg:gap-8 lg:text-2xl">
              <p>
                I'm a passionate product designer with a love for creating beautiful and intuitive user experiences.
              </p>
              <p>
                My goal is to craft designs that not only look great but also make people's lives easier. I'm always
                looking for new challenges and opportunities to grow as a designer.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:gap-8">
            <div className="relative">
              <img
                alt="Photo"
                className="object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl grid divide-y divide-gray-200 dark:divide-gray-800">
          <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl/none">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400">Let me tell you a little bit about myself.</p>
            </div>
            <div className="grid gap-4 prose lg:text-xl lg:gap-8">
              <p>
                I'm a product designer with a background in graphic design. I've always been fascinated by the
                intersection of art and technology, and I love how design allows me to express my creativity while
                solving real-world problems.
              </p>
              <p>
                In my free time, you can find me exploring the city in search of inspiration, experimenting with new
                design tools, or getting lost in a good book. I'm passionate about continuous learning and always
                looking for ways to improve my skills.
              </p>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl/none">My Work</h2>
              <p className="text-gray-500 dark:text-gray-400">Check out some of my recent projects.</p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="grid gap-2">
                    <CardHeader>
                      <CardTitle>Project X</CardTitle>
                      <CardDescription>An innovative approach to project management.</CardDescription>
                    </CardHeader>
                    <img
                      alt="Project X"
                      className="rounded-md object-cover"
                      height="200"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/200",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">View Project</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="grid gap-2">
                    <CardHeader>
                      <CardTitle>Project Y</CardTitle>
                      <CardDescription>Redefining the customer experience.</CardDescription>
                    </CardHeader>
                    <img
                      alt="Project Y"
                      className="rounded-md object-cover"
                      height="200"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/200",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">View Project</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl/none">My Skills</h2>
              <p className="text-gray-500 dark:text-gray-400">Here are some of the skills that I bring to the table.</p>
            </div>
            <div className="grid gap-4">
              <dl className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center">
                  <dt className="font-semibold">UI/UX Design</dt>
                  <dd className="ml-auto text-sm text-gray-500 md:text-base dark:text-gray-400">Expert</dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold">Prototyping</dt>
                  <dd className="ml-auto text-sm text-gray-500 md:text-base dark:text-gray-400">Advanced</dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold">Wireframing</dt>
                  <dd className="ml-auto text-sm text-gray-500 md:text-base dark:text-gray-400">Advanced</dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold">Interaction Design</dt>
                  <dd className="ml-auto text-sm text-gray-500 md:text-base dark:text-gray-400">Expert</dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold">Visual Design</dt>
                  <dd className="ml-auto text-sm text-gray-500 md:text-base dark:text-gray-400">Expert</dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold">User Research</dt>
                  <dd className="ml-auto text-sm text-gray-500 md:text-base dark:text-gray-400">Intermediate</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl/none">Contact Me</h2>
              <p className="text-gray-500 dark:text-gray-400">Want to work together? Drop me a message.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <form className="grid gap-4 md:col-span-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" required />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}