// Copyright 2022 Neeva Inc. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

export type MaybePromise<T> = Promise<T> | T;

export function delay(timeMs: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, timeMs));
}
