<template>
    <div>
        <h3 v-if="pageType === PageType.ADD">사원 추가</h3>
        <h3 v-if="pageType === PageType.EDIT">사원 수정</h3>
        <div class="form">
            <div class="form-group">
                <label>소속 팀</label>
                <select v-model="selectedTeamSeq" class="form-control" placeholder="Input field">
                    <option value="undefined">팀을 선택해 주세요</option>
                    <option
                        v-for="(item, key) in teamList"
                        v-bind:key="key"
                        v-bind:value="item.seq"
                    >{{item.name}}</option>
                </select>
            </div>&nbsp;
            <div class="form-group">
                <label>아이디</label>
                <input
                    :disabled="pageType === PageType.EDIT"
                    v-model="memberId"
                    type="text"
                    class="form-control"
                    id
                    placeholder="아이디를 입력해 주세요"
                >
            </div>
            <div class="form-group">
                <label>이름</label>
                <input
                    v-model="memberName"
                    type="text"
                    class="form-control"
                    id
                    placeholder="이름을 입력해 주세요"
                >
            </div>
            <button
                v-if=" pageType === PageType.ADD"
                v-on:click="addMember()"
                class="btn btn-primary"
            >추가</button>
            <template v-if="pageType === PageType.EDIT">
                <button v-on:click="updateMember()" class="btn btn-primary">수정</button>
                &nbsp;
                <button v-on:click="deleteMember()" class="btn btn-danger">삭제</button>
            </template>&nbsp;
            <button class="btn btn-default" onclick="javascript:window.history.back()">취소</button>
        </div>
    </div>
</template>

<script>
const PageType = {
    EDIT: "EDIT",
    ADD: "ADD"
};

import axios from "axios";
import router from "../router";
import { API_MEMBER_ID, API_MEMBER } from "../util/api";

export default {
    name: "PageMemberEdit",
    computed: {
        teamList() {
            return this.$store.state.teamModule.teamList;
        }
    },
    data() {
        return {
            PageType: PageType,
            pageType: PageType.ADD,
            selectedTeamSeq: undefined,
            memberName: "",
            memberId: ""
        };
    },
    mounted: function() {
        const routeId = this.$route.params.id;
        console.log(routeId);
        if (routeId) {
            this.pageType = PageType.EDIT;
            this._getMemberById(routeId);
        }
        this.$store.dispatch("getTeamList");
    },
    methods: {
        addMember: function() {
            return axios
                .post(API_MEMBER, "", {
                    params: {
                        teamSeq: this.selectedTeamSeq,
                        name: this.memberName,
                        id: this.memberId
                    }
                })
                .then(() => {
                    console.log("맴버등록 완료");
                    router.push("../");
                });
        },
        updateMember: function() {
            const params = {
                name: this.memberName,
                teamSeq: this.selectedTeamSeq
            };
            axios
                .patch(API_MEMBER_ID(this.memberId), "", {
                    params: params
                })
                .then(result => {
                    console.log(result);
                    router.push("../");
                });
        },
        deleteMember: function() {
            axios.delete(API_MEMBER_ID(this.memberId), {}).then(result => {
                console.log(result);
                router.push("../");
            });
        },
        _getMemberById(id) {
            axios.get(API_MEMBER_ID(id), {}).then(result => {
                console.log(result);
                this.selectedTeamSeq = result.data.team.seq;
                this.memberName = result.data.name;
                this.memberId = result.data.id;
            });
        }
    }
};
</script>

<style>
</style>
