import React from "react"
import { StreamerSchema } from "@/src/lib/data/streams/definitions"
import { deleteStreamer, updateState } from "@/src/lib/data/streams/streamer-apis"
import { OpenVideoContextMenuStrings } from "@/src/app/[locale]/(feat)/streamers/components/open-video-context-menu"
import { toResponsiveCard, toStreamerCards } from "@/src/app/[locale]/(feat)/streamers/utils/streamer-utils"
import { useFormatter, useTranslations } from "next-intl"

type StreamersListWrapperProps = {
	streamers: StreamerSchema[]
	templateStreamers: StreamerSchema[]
	contextMenuStrings: OpenVideoContextMenuStrings
	deleteStreamer: (id: string) => Promise<void>
	searchQuery?: string
}

export default function StreamerListWrapper({
	templateStreamers,
	streamers,
	contextMenuStrings,
	searchQuery,
}: StreamersListWrapperProps) {
	const t = useTranslations("StreamerData")

	const format = useFormatter()

	// Filter streamers based on search query
	const filteredStreamers = searchQuery
		? streamers.filter(streamer => 
			streamer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			streamer.streamTitle?.toLowerCase().includes(searchQuery.toLowerCase())
		)
		: streamers

	const filteredTemplateStreamers = searchQuery
		? templateStreamers.filter(streamer => 
			streamer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			streamer.streamTitle?.toLowerCase().includes(searchQuery.toLowerCase())
		)
		: templateStreamers

	const templateCards = toStreamerCards(filteredTemplateStreamers, t, format)
	const streamerCards = toStreamerCards(filteredStreamers, t, format)

	return (
		<div className={"grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7"}>
			{
				<>
					{templateCards.map(e => toResponsiveCard(e, contextMenuStrings, updateState, deleteStreamer))}
					{streamerCards.map(e => toResponsiveCard(e, contextMenuStrings, updateState, deleteStreamer))}
				</>
			}
		</div>
	)
}
