function theme() {
  var element = document.body;
  if (element.classList.toggle("dark-mode")) {
    document.getElementById("sun").src = "images/sun.png";
    document.getElementById('bar_name').style.color = 'white';
    document.getElementById('button-text').style.color = 'white';
    document.getElementById('button-text2').style.color = 'white';

  } else {
    document.getElementById("sun").src = "images/moon.png";
    document.getElementById('bar_name').style.color = 'black';
    document.getElementById('button-text').style.color = 'black';
    document.getElementById('button-text2').style.color = 'black';
  }
};
setTimeout(() => {
  const box = document.getElementById('loader');
  const but = document.getElementById('start_but');
  box.style.display = 'none';
  but.style.display = 'flex';

}, 1500);

function home() {
  document.getElementById('title').style.display = 'block';
  document.getElementById('chossing').style.display = 'none';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('Predicting_page').style.display = 'none';
  document.getElementById('about').style.display = 'block';
  document.getElementById('about').style.marginTop = '90px';
  document.getElementById('pred_3d').style.display = 'none';
  document.getElementById('menu_3d').style.visibility = 'hidden';
  document.getElementById('menu_site').style.visibility = 'hidden';
}

function chose() {
  document.getElementById('title').style.display = 'none';
  document.getElementById('Predicting_page').style.display = 'none';
  document.getElementById('pred_3d').style.display = 'none';
  document.getElementById('menu_3d').style.visibility = 'visible';
  document.getElementById('menu_site').style.visibility = 'visible';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('chossing').style.display = 'block';
  document.getElementById('bar_name').style.display = 'block';
  document.getElementById('about').style.display = 'block';
  document.getElementById('about').style.marginTop = '120px';
}

function predicting_site() {
  document.getElementById('title').style.display = 'none';
  document.getElementById('chossing').style.display = 'none';
  document.getElementById('bar_name').style.display = 'block';
  document.getElementById('about').style.display = 'block';
  document.getElementById('about').style.marginTop = '30%';
  document.getElementById('Predicting_page').style.display = 'block';
  document.getElementById('pred_3d').style.display = 'none';
  document.getElementById('about-section').style.display = 'none';

}

function predicting_3d() {
  document.getElementById('title').style.display = 'none';
  document.getElementById('chossing').style.display = 'none';
  document.getElementById('bar_name').style.display = 'block';
  document.getElementById('about').style.display = 'block';
  document.getElementById('about').style.marginTop = '500px';
  document.getElementById('Predicting_page').style.display = 'none';
  document.getElementById('pred_3d').style.display = 'block';
  document.getElementById('about-section').style.display = 'none';

}

function about() {
  document.getElementById('title').style.display = 'none';
  document.getElementById('chossing').style.display = 'none';
  document.getElementById('Predicting_page').style.display = 'none';
  document.getElementById('pred_3d').style.display = 'none';
  document.getElementById('bar_name').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('about-section').style.display = 'block';
  document.getElementById('menu_3d').style.visibility = 'visible';
  document.getElementById('menu_site').style.visibility = 'visible';
}

function displayFileName() {
  const input = document.getElementById("file-upload");
  const output = document.getElementById("file-name");
  const fileName = input.value.split("\\").pop();

  output.innerText = fileName;
}

function displayFileName2() {
  const input = document.getElementById("file-upload2");
  const output = document.getElementById("text-file-name");
  const fileName = input.value.split("\\").pop();
  output.style.display = 'inline'

  output.innerText = fileName;
}

// function isProteinSequence(seq) {
//   // Remove any whitespace characters from the input sequence
//   seq = seq.replace(/\s/g, '');

//   // Define a regular expression to match valid amino acid codes
//   var aminoAcidRegex = [ACDEFGHIKLMNPQRSTVWY];

//   // Check if the sequence matches the amino acid regex
//   return aminoAcidRegex.test(seq);
// }


// function Check_sequence(sequence) {

//   if (typeof sequence === 'string') {
//     function isProteinSequence(sequence) {
//       // Remove any whitespace characters from the input sequence
//       // sequence = seq.replace(/\s/g, '');

//       // Define a regular expression to match valid amino acid codes
//       var aminoAcidRegex = [ACDEFGHIKLMNPQRSTVWY];

//       // Check if the sequence matches the amino acid regex
//       if (aminoAcidRegex.test(sequence)) {
//         alert("sequence is vaild");
//       } else {
//         alert("sequence is not vaild please write a vaild sequence");
//       }
//     }

//   }
  //  else if (sequence && sequence.constructor === File) {

  //   var fileName = sequence;
  //   var fileExtension = fileName.split('.').pop();

  //   // Define an array of allowed file extensions
  //   var allowedExtensions = ['txt', 'fasta'];

  //   // Check if the file extension is in the list of allowed extensions
  //   if (allowedExtensions.includes(fileExtension.toLowerCase())) {
  //     // The file format is allowed
  //     alert(fileExtension + " this formt is available");
  //   } else {
  //     alert("try another file format only accepted .txt & .fasta files")
  //   }
  // }

// }

// var sequence = document.forms["pred_3d_form"]["protein_sequence"].value;
// if(sequence == "" ){
//   alert("is empty");
// }
// else{
//   Check_sequence(sequence);

// }

// function Check_format_file(file) {

//   var fileName = file;
//   var fileExtension = fileName.split('.').pop();

//   // Define an array of allowed file extensions
//   var allowedExtensions = ['pdb', 'mol2'];

//   // Check if the file extension is in the list of allowed extensions
//   if (allowedExtensions.includes(fileExtension.toLowerCase())) {
//     // The file format is allowed
//     alert(fileExtension + " this formt is available");
//   } else {
//     alert("try another file format only accepted .pdb & .mol2 files");
//   }
// }
// // var protein_file = document.getElementById('protein_file').value;
// var protein_file = document.forms["pred_site_form"]["protein_file"].value;
// if(protein_file != ""){
  
// Check_format_file(protein_file);
// }
//   document.getElementById('start_but').onclick = afterstart();

// var viewer = $3Dmol.createViewer("viewer", { backgroundColor: "white" });

// var pdbPath = "E:/Courses Z2/Drug design/Labs/6lu7.pdb";
// var config = { backgroundColor: "white" };
// var viewer = $3Dmol.createViewer("viewer", config);
// viewer.addModel(pdbPath, "pdb", function () {
//     viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
//     viewer.zoomTo();
//     viewer.render();
// });

// var fileInput = document.createElement("input");
// fileInput.type = "file";
// fileInput.addEventListener("change", function() {
//     var file = fileInput.files[0];
//     var reader = new FileReader();
//     reader.onload = function() {
//         var pdbData = reader.result;
//         viewer.addModel(pdbData, "pdb");
//         viewer.zoomTo();
//         viewer.render();
//     };
//     reader.readAsText(file);
// });
// document.body.appendChild(fileInput);
// $.get('E:/Courses Z2/Drug design/Labs/6lu7.pdb', function(data) {
//   // Create the viewer object
//   var viewer = $3Dmol.createViewer('pdbCanvas', {defaultcolors: $3Dmol.rasmolElementColors});

//   // Add the model to the viewer
//   viewer.addModel(data, 'pdb');

//   // Zoom to the model
//   viewer.zoomTo();
// });

// let element = document.querySelector('#container-01');
// let config = {
//   backgroundColor: 'orange'
// };
// let viewers = $3Dmol.createViewer(element, config);
// viewers.addSphere({
//   center: {
//     x: 0,
//     y: 0,
//     z: 0
//   },
//   radius: 10.0,
//   color: 'green'
// });
// viewers.zoomTo();
// viewers.render();
// viewers.zoom(0.8, 2000);
// viewers.setBackgroundColor('white');
// let viewer = $3Dmol.createViewer( element, config );
// let pdbUri = '/path/to/your/pdb/files/1ycr.pdb';
// jQuery.ajax( pdbUri, { 
//   success: function(data) {
//     let v = viewer;
//     v.addModel( data, "pdb" );                       /* load data */
//     v.setStyle({}, {cartoon: {color: 'spectrum'}});  /* style all atoms */
//     v.zoomTo();                                      /* set camera */
//     v.render();                                      /* render scene */
//     v.zoom(1.2, 1000);                               /* slight zoom */
//   },
//   error: function(hdr, status, err) {
//     console.error( "Failed to load PDB " + pdbUri + ": " + err );
//   },
// });
// let colorAsSnake = function(atom) {
//   return atom.resi % 2 == 0 ? 'white' : 'green';
// };
// viewer.setStyle({chain: 'A'}, {cartoon: {colorfunc: colorAsSnake}});