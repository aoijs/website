import { Select } from "chakra-react-select";
import { useState } from "react";

const permissions = [
  { label: "Create Instant Invite", value: "CreateInstantInvite" },
  { label: "Kick Members", value: "KickMembers" },
  { label: "Ban Members", value: "BanMembers" },
  { label: "Administrator", value: "Administrator", colorScheme: "red" },
  { label: "Manage Channels", value: "ManageChannels" },
  { label: "Manage Guild", value: "ManageGuild" },
  { label: "Add Reactions", value: "AddReactions" },
  { label: "View Audit Log", value: "ViewAuditLog" },
  { label: "Priority Speaker", value: "PrioritySpeaker" },
  { label: "Stream", value: "Stream" },
  { label: "View Channel", value: "ViewChannel" },
  { label: "Send Messages", value: "SendMessages" },
  { label: "Send TTS Messages", value: "SendTTSMessage" },
  { label: "Manage Messages", value: "ManageMessages" },
  { label: "Embed Links", value: "EmbedLinks" },
  { label: "Attach Files", value: "AttachFiles" },
  { label: "Read Message History", value: "ReadMessageHistory" },
  { label: "Mention Everyone", value: "MentionEveryone" },
  { label: "Use External Emojis", value: "UseExternalEmojis" },
  { label: "View Guild Insights", value: "ViewGuildInsights" },
  { label: "Connect", value: "Connect" },
  { label: "Speak", value: "Speak" },
  { label: "Mute Members", value: "MuteMembers" },
  { label: "Deafen Members", value: "DeafenMembers" },
  { label: "Move Members", value: "MoveMembers" },
  { label: "Use Voice Activation Detection", value: "UseVAD" },
  { label: "Change Nickname", value: "ChangeNickname" },
  { label: "Manage Nicknames", value: "ManageNicknames" },
  { label: "Manage Roles", value: "ManageRoles" },
  { label: "Manage Webhooks", value: "ManageWebhooks" },
  { label: "Manage Stickers, Emojis & Sounds", value: "ManageGuildExpressions" },
  { label: "Request to Speak", value: "RequestToSpeak" },
  { label: "Manage Threads", value: "ManageThreads" },
  { label: "Manage Events", value: "ManageEvents" },
  { label: "Create Public Threads", value: "CreatePublicThreads" },
  { label: "Create Private Threads", value: "CreatePrivateThreads" },
  { label: "Use External Stickers", value: "UseExternalStickers" },
  { label: "Send Messages in Threads", value: "SendMessagesInThreads" },
  { label: "Use Embedded Activities", value: "UseEmbeddedActivities" },
  { label: "Moderate Members (timeout)", value: "ModerateMembers" },
  { label: "Use Application Commands", value: "UseApplicationCommands" },
  { label: "View Creator Monetization Analytics", value: "ViewCreatorMonetizationAnalytics" },
  { label: "Use Soundboard", value: "UseSoundboard" },
  { label: "Use External Sounds", value: "UseExternalSounds" },
  { label: "Send Voice Messages", value: "SendVoiceMessages" },
  { label: "Send Polls", value: "SendPolls" },
];

function PermissionSelect({
  onChange,
}: {
  onChange: (selectedOptions: any) => void;
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options: any) => {
    if (options.some((opt: any) => opt.value === "Administrator")) {
      // @ts-ignore
      setSelectedOptions([{ label: "Administrator", value: "Administrator", colorScheme: "red" }]);
    } else {
      setSelectedOptions(options);
    }
    onChange(options);
  };

  return (
    <Select
      required
      isMulti
      selectedOptionStyle="check"
      tagColorScheme="var(--sl-color-text-accent)"
      options={permissions}
      value={selectedOptions}
      onChange={handleChange}
    />
  );
}

export default PermissionSelect;
