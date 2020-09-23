<template>
  <div>
    <Header />
    <section class="recipeView">
      <article>
        <h2>Salad</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="galery">
          <div class="galery__main">
            <img src="http://lorempixel.com/output/food-q-c-640-480-1.jpg" alt />
          </div>
          <div class="galery--carrusel">
            <img src="http://lorempixel.com/output/food-q-c-640-480-9.jpg" alt />
            <img src="http://lorempixel.com/output/food-q-c-640-480-9.jpg" alt />
            <img src="http://lorempixel.com/output/food-q-c-640-480-9.jpg" alt />
          </div>
        </div>
      </article>
      <article class="recipeView__contenido">


        <div class="container__table">
          <div class="container__table--header space">
            <div class="container__table--title style-title" >Ingredientes</div>
            <button class="IconBase MuiIconButton-root" tabindex="0" type="button" aria-label="filter list" title="Filter list">
              <span class="">
                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </button>
          </div>
          <div class="MuiTableContainer-root">
            
            <table class="MuiTable-root" aria-labelledby="tableTitle" aria-label="enhanced table">
              <thead class="MuiTableHead-root">
                <tr class="MuiTableRow-root">
                  <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-paddingCheckbox" scope="col">
                    <span class="IconBase MuiIconButton-root filasPadding MuiCheckbox-root" aria-disabled="false">
                      <span class="">
                        <input type="checkbox" class="inputStyleBase" data-indeterminate="false" aria-label="select all desserts" value="">
                        <!-- <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                        </svg> -->
                      </span>
                      <span class="MuiTouchRipple-root"></span>
                    </span>
                  </th>
                  <th class="MuiTableCell-root MuiTableCell-head" scope="col">
                    <span class="IconBase" tabindex="0" role="button" aria-disabled="false">Dessert(100gr serving)</span>
                  </th>
                  <th class="MuiTableCell-root MuiTableCell-head" aria-sort="ascending" scope="col">
                    <span class="IconBase MuiTableSortLabel-active" tabindex="0" role="button" aria-disabled="false">Calories</span>
                  </th>
                  <th class="MuiTableCell-root MuiTableCell-head" scope="col">
                    <span class="IconBase" tabindex="0" role="button" aria-disabled="false">Fat(g)</span>
                  </th>
                  <th class="MuiTableCell-root MuiTableCell-head" scope="col">
                    <span class="IconBase" tabindex="0" role="button" aria-disabled="false">Carbs(g)</span>
                  </th>
                  <th class="MuiTableCell-root MuiTableCell-head" scope="col">
                    <span class="IconBase" tabindex="0" role="button" aria-disabled="false">Protein(g)</span>
                  </th>
                </tr>
              </thead>
              <tbody class="MuiTableBody-root" v-for="(item) in items" :key="item.dessert">
                <tr class="MuiTableRow-root MuiTableRow-hover" role="checkbox" aria-checked="false" tabindex="-1">
                  <td class="MuiTableCell-root MuiTableCell-paddingCheckbox">
                    <span class="IconBase MuiIconButton-root filasPadding MuiCheckbox-root" aria-disabled="false">
                      <span class="">
                        <input type="checkbox" class="jss77" data-indeterminate="false" aria-labelledby="enhanced-table-checkbox-0" value="">
                        <!-- <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                        </svg> -->
                      </span>
                      <span class="MuiTouchRipple-root">
                        </span></span>
                  </td>
                  <th class="MuiTableCell-root" role="cell" scope="row" id="enhanced-table-checkbox-0">{{item.dessert}}</th>
                    <td class="MuiTableCell-root">{{item.calories}}</td>
                    <td class="MuiTableCell-root">{{item.fat}}</td>
                    <td class="MuiTableCell-root">{{item.carbs}}</td>
                    <td class="MuiTableCell-root">{{item.protein}}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

         <div class="contenido__botones">
          <a href="#/">Buy</a>
          <a href="#/">Add</a>
        </div>
      
      </article>
     

     
    </section>

    <section class="preparation">
      <h2>Preparation</h2>
        <div class="tab">
          <button class="tablinks"  v-on:click="viewStep(event, 'Step')">Step</button>
          <button class="tablinks"  v-on:click="viewStep(event, 'Step2')">Step2</button>
          <button class="tablinks"  v-on:click="viewStep(event, 'Step3')">Step3</button>
        </div>

        <div id="Step" class="tabcontent">
          <h3>Step</h3>
          <p>Step Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div id="Step2" class="tabcontent">
          <h3>Step2</h3>
          <p>Step2 Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
        </div>

        <div id="Step3" class="tabcontent">
          <h3>Step3</h3>
          <p>Step3 Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        </div>

      </section>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
 
export default {
   name: 'ingredients',
  data() {
    return {
     items: [
      { id: 1, dessert: "Frozen yoghurt", calories: '200', fat: '1', carbs:'8', protein: '5' },
      { id: 2, dessert: "Ice cream sandwich", calories: '60', fat: '5', carbs:'24', protein: '2' },
      { id: 3, dessert: "Eclair", calories: '250', fat: '10', carbs:'15', protein: '6'},
      { id: 4, dessert: "Cupcake", calories: '300', fat: '5' , carbs:'0', protein: '4'},
      { id: 5, dessert: "Gingerbread", calories: '90', fat: '4' , carbs:'20', protein: '2'},
      { id: 6, dessert: "Marshmallow", calories: '120', fat: '11', carbs:'24', protein: '10'},
      { id: 7, dessert: "Nougat", calories: '360', fat: '19', carbs:'16', protein: '10'},
      { id: 7, dessert: "Jelly Bean", calories: '300', fat: '0', carbs:'8', protein: '20'}
    ]
    };
  },
  components: {
    Header,
  },

  // definir métodos bajo el objeto `methods`
  methods: {
    viewStep: function (evt,step) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(step).style.display = "block";
        evt.currentTarget.className += " active";
    }
  }

    
};


</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body,
h2,
h3,
p {
  margin: 0px;
  padding: 0px;
}

h2 {
  display: flex;
  align-items: center;
  text-align: right;
  font-weight: bold;
  font-size: 49.6px;
  line-height: 62px;
  margin-top: 0px;
}
.recipeView {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 20px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
}

article {
  margin: 0 auto;
  width: 100%;
  height: 610px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 85%;
    text-align: justify;
    margin-top: 5px;
    height: 5em;
    overflow: auto;
  }
}

.galery {
  display: grid;
  grid-template-rows: 60% 40%;
  width: 100%;
  height: 536px;
  margin-top: 10px;

  &__main {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      margin: 10px;
      margin: 0 auto;
    }
  }

  .galery--carrusel {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    img {
      object-fit: cover;
      width: 31%;
      height: 110px;
    }
  }
}

.recipeView__contenido {
  display: inline-block;
  position: relative;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  h3 {
    text-align: left;
    margin-top: 10px;
  }
  .contenido__botones {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 20px;
    right: 20px;

    a {
      text-decoration: none;
      background-color: #e57373;
      width: 70px;
      height: 36px;
      margin: 0px 10px 0 10px;
      -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      text-align: center;
      color: white;
      line-height: 36px;
    }
  }
  
}
/* Style the table */
.container__table {
  width: 100%;
  margin: 10px 0 10px 0;

  .space {
    padding-left: 16px;
    padding-right: 8px;
  }

  .container__table--header{
    display: flex;
    position: relative;
    align-items: center;

    .container__table--title {
      flex: 1 1 100%;
    }

    .style-title {
      font-size: 1.25rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.6;
      letter-spacing: 0.0075em;
      text-align: left;
    }

  }

  .MuiTableContainer-root {
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;

    .MuiTable-root {
      width: 100%;
      display: table;
      border-spacing: 0;
      border-collapse: collapse;

      .MuiTableHead-root {
        display: table-header-group;
      }

      .MuiTableRow-root {
        color: inherit;
        display: table-row;
        outline: 0;
        vertical-align: middle;
      }


      .MuiTableRow-root.MuiTableRow-hover:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
      .MuiTableRow-root.Mui-selected, .MuiTableRow-root.Mui-selected:hover {
        background-color: rgba(220, 0, 78, 0.08);
      }

      .MuiTableCell-head {
        color: rgba(0, 0, 0, 0.87);
        font-weight: 500;
        line-height: 1.5rem;
      }

      .MuiTableCell-paddingCheckbox {
        width: 48px;
        padding: 0 0 0 4px;
      }

      .MuiTableCell-root {
        display: table-cell;
        font-size: 0.875rem;
        text-align: left;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        letter-spacing: 0.01071em;
        vertical-align: inherit;
        text-align:center;
      }

      .MuiCheckbox-root {
        color: rgba(0, 0, 0, 0.54);
      }

    }
  }
}

.IconBase {
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.MuiIconButton-root {
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  overflow: visible;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
}

.filasPadding {
  padding: 9px;
}

.MuiSvgIcon-root {
  fill: blue;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}

.inputStyleBase {
  top: 0;
  left: 0;
  cursor: inherit;
  height: 15px;
}

.MuiTouchRipple-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
}


/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;

}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  transition: 0.3s;
  border:1px solid gray;

}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  text-align: left;
}

.preparation{
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
}

</style>