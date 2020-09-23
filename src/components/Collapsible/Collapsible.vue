<template>
    <div class="collapsible">
        <div v-for="(item, index) in collapsibleItems" :key="index" class="collapsible--item">
            <div @click="activateBody(index)" class="collapsible--header">
                {{item.header}}
            </div>
            <transition name="slide-fade">
            <div v-if="item.active" class="collapsible--body">
                {{item.body}}
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props:["items"],
    data() {
        return {
            collapsibleItems: []
        }
    },
    methods: {
        activateBody(index) {
            this.collapsibleItems[index].active = !this.collapsibleItems[index].active;
            this.collapsibleItems.forEach((item, itemIndex) => {
                if (itemIndex !== index) {
                    this.collapsibleItems[itemIndex].active = false
                }
            })
        },
        createCollapse() {
            this.collapsibleItems = this.items.map((item) => {

                return {
                    header: item.header,
                    body: item.body,
                    active: false
                }
                }
            );
        }
    },
    watch: {
        items() {
            this.createCollapse();
        }
    },
    mounted() {
        this.createCollapse();
    }
}
</script>

<style lang="scss" scoped>
.collapsible {
    width: 100%;
    margin: auto;
    height: auto;
    border-radius: .2em;
    text-align: left;
    box-shadow: 1px 1px 5px 1px #bbb;

    &--header {
        cursor: pointer;
        padding: 20px;
        font-weight: 700;
        border-bottom: 1px solid #ccc;
    }

    &--body {
        padding: .5em 2em;
        border-bottom: 1px solid #ccc;
    }
}

.slide-fade-enter-active {
    transition: all 0.8s ease ;
}

.slide-fade-leave-active {
    transition: all 0.8s ease ;
}

.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(1000px);
    opacity: 0;
}
</style>