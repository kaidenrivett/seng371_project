"use strict";

import { authenticate } from "@lib/auth";
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    return authenticate(request);
}

// Match everything except /Login
export const config = {
  matcher: '/((?!Login|denied))',
}
