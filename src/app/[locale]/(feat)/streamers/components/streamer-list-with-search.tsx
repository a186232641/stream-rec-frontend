'use client'

import React, { useState } from "react"
import { StreamerSchema } from "@/src/lib/data/streams/definitions"
import { OpenVideoContextMenuStrings } from "@/src/app/[locale]/(feat)/streamers/components/open-video-context-menu"
import StreamerListWrapper from "@/src/app/[locale]/(feat)/streamers/components/streamer-list-wrapper"
import StreamerSearch from "@/src/app/[locale]/(feat)/streamers/components/streamer-search"

type StreamerListWithSearchProps = {
	streamers: StreamerSchema[]
	templateStreamers: StreamerSchema[]
	contextMenuStrings: OpenVideoContextMenuStrings
	deleteStreamer: (id: string) => Promise<void>
}

export default function StreamerListWithSearch({
	streamers,
	templateStreamers,
	contextMenuStrings,
	deleteStreamer,
}: StreamerListWithSearchProps) {
	const [searchQuery, setSearchQuery] = useState("")

	const handleSearch = (query: string) => {
		setSearchQuery(query)
	}

	return (
		<div className="space-y-4">
			<StreamerSearch onSearch={handleSearch} />
			<StreamerListWrapper
				streamers={streamers}
				templateStreamers={templateStreamers}
				contextMenuStrings={contextMenuStrings}
				deleteStreamer={deleteStreamer}
				searchQuery={searchQuery}
			/>
		</div>
	)
}