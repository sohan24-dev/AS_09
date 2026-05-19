import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import next from 'next'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        const loginUrl = new URL('/login', request.url)

        // save current page
        loginUrl.searchParams.set(
            'callbackUrl',
            request.nextUrl.pathname + request.nextUrl.search
        )

        return NextResponse.redirect(loginUrl)
    }
    return NextResponse.next()

}

export const config = {
    matcher: ['/add-idea', '/my-interactions', '/profile', "/my-ideas", "/ideas/:id"],
}