'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
    onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
    const router = useRouter()
    const ctxProviderRef = useRef<
        typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
    >(null)

    useEffect(() => {
        const handleUpload = async (e: any) => {
            const file = await onUpload(e.detail.cdnUrl)
            if (file) {
                router.refresh()
            }
        }
        ctxProviderRef.current?.addEventListener('file-upload-success', handleUpload)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div >
            <lr-config
                ctx-name="my-uploader"
                pubkey="48708f199f9833403871"
                max-local-file-size-bytes="1000000000"
                img-only="true"
                source-list="local, url, camera, dropbox, gdrive"
            />

            <lr-file-uploader-regular
                ctx-name="my-uploader"
                class="my-config uc-dark"
            />


            <lr-upload-ctx-provider
                ctx-name="my-uploader"
                ref={ctxProviderRef}
            />
        </div>
    )
}

export default UploadCareButton
