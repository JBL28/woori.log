'use client'

import { ArrowLeft, Plus, Send, UserPlus, Users, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [inviteId, setInviteId] = useState("")
    const [invitedMembers, setInvitedMembers] = useState([]);

    const addMember = () => {
        if(inviteId){
            const newMember = {
                id: inviteId,
                name: inviteId
            }
        setInvitedMembers([...invitedMembers, newMember]);
        setInviteId("");
        }
    } 

  const removeMember = (removeId) => {
    setInvitedMembers(invitedMembers.filter(member => member.id !== removeId))
  }

    return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <div className="mx-auto max-w-5xl">
          {/* Navigation */}
            <Link href="/" className="inline-flex items-center px-2 py-1 text-gray-700 rounded-md mb-7
                hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Main
            </Link>

          <div className="border-0 p-10 bg-white/60 backdrop-blur-sm shadow-lg">
            <header className="mb-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0067AC]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold tracking-tight text-2xl">Create New Group</div>
                  <p className="text-gray-500">Start a new community for collaborative blogging</p>
                </div>
              </div>
            </header>
            
            <div className="p-6 pt-0 space-y-8">
              {/* Group Basic Info */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="group_name" className="text-base font-medium">
                    Group Name *
                  </label>
                  <input
                    id="group_name"
                    placeholder="Enter your group name..."
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="flex w-full rounded-md px-3 py-2 mt-2 border border-gray-300 bg-transparent text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-12"
                  />
                  <p className="text-sm text-muted-foreground">
                    Choose a clear and descriptive name for your group
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="group_intro" className="text-base font-medium">
                    Group Description *
                  </label>
                  <textarea
                    id="group_intro"
                    placeholder="Describe what your group is about, its purpose, and what kind of content members will share..."
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                    className="flex w-full mt-2 rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[120px] resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    Help potential members understand what your group is about
                  </p>
                </div>
              </div>

              {/* Group Preview */}
              {(groupName || groupDescription) && (
                <div className="space-y-2">
                  <label className="text-base font-medium">Preview</label>
                  <div className="mt-2 border-2 border-dashed border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#0067AC] text-white">
                          <Users className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">
                            {groupName || "Your Group Name"}
                          </h3>
                          <p className="text-muted-foreground">
                            {groupDescription || "Your group description will appear here..."}
                          </p>
                          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                            <span>0 members</span>
                            <span>0 posts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Member Invitation */}
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium">Invite Members</label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Add team members by their ID.
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <UserPlus className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                    value={inviteId}
                    onChange={(e) => setInviteId(e.target.value)}
                      placeholder="Enter member's id..."
                      className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 pl-10"
                    />
                  </div>
                  <button 
                    onClick={addMember} 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-4 py-2 bg-[#0067AC] text-white hover:bg-[#0067AC]/90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </button>
                </div>

                {/* Invited Members List */}
                {invitedMembers.length > 0 && (
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-muted-foreground">
                      Invited Members ({invitedMembers.length})
                    </label>
                    <div className="mt-2 space-y-2 max-h-48 overflow-y-auto">
                      {invitedMembers.map((member) => (
                        <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <p className="h-8 w-8">
                              <img src="https://placehold.co/32"
                                className="h-8 w-8 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                              />
                            </p>
                            <div>
                              <div className="font-medium text-sm">{member.name}</div>
                              <div className="text-xs text-muted-foreground">{member.id}</div>
                            </div>
                          </div>
                          <button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeMember(member.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Action Buttons */}
              <div className="flex justify-end pt-6 border-t border-t-gray-300">
                <button 
                  className="inline-flex items-center justify-center p-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-4 py-2 bg-[#0067AC] text-white hover:bg-[#0067AC]/90">
                  <Send/>
                  <p className="pl-3">
                     Create Group
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}