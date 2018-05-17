<?php 
session_start();
//if($_SESSION["ok"]==true){
?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Libreria de uso para los gráficos grids, combos  -->

<script type="text/javascript" src="js/jquery.min2.js"></script>

<script type="text/javascript" src="js/jqwidgets/jqxcore.js"></script>
<script type="text/javascript" src="js/jqwidgets/jqx-all.js"></script>
<script type="text/javascript" src="js/bootstrap.js" ></script>
<script type="text/javascript" src="js/jqwidgets/globalization/globalize.js"></script>
<script type="text/javascript" src="js/jqwidgets/globalization/localization.js"></script>
<script type="text/javascript" src="js/crud.js"></script>



<!-- hojas de estilos utilizadas  -->

<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="js/jqwidgets/styles/jqx.base.css">
<link rel="stylesheet" type="text/css" href="js/jqwidgets/styles/jqx.darkblue.css">
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap-submenu.min.css">
<link rel="stylesheet" type="text/css" href="css/estilo.css">

<title>CRUD</title>
</head>

<body class="hold-transition skin-blue sidebar-mini sidebar-collapse">
<div class="container-fluid" style="padding-left: 30px;" id="busquess">
   <div class="espacio2x"></div>
    <div class="row">
        <div class="col-lg-2">
            Busqueda por RFC
        </div>
        <div class="col-lg-2">
            <input type="text" id="rfcBusqueda"/>
        </div>
        <div class="col-lg-2">
              <input type="button" value="Buscar" id='btnbuscar'/>
        </div>
        <div class="col-lg-2">
              <input type="button" value="Limpiar" id='limpiarbusqueda'/>
        </div>
    </div>
    <div class="espacio2x"></div>
    <div class="row">
        <div class="col-lg-8">
             <div name="grid" id="grid" style="font-size: 13px; font-family: Verdana; margin:0 auto; "></div>
        </div>
        <div class="col-lg-3">
            <input type="button" value="Nuevo" id='nuevo'/>
           <div class="espacio1x"></div> 
            <input type="button" value="Editar" id='editar'/>
            <div class="espacio1x"></div>
            <input type="button" value="Eliminar" id='eliminar'/>
            <div class="espacio1x"></div>
        </div>
    </div>
    
</div>


<!-- ventana emergente para visualizar documentos -->
<div id="windowNuevo" style="overflow: hidden;">
    <div id="windowNuevoHeader">Nuevo </div>
    <div style="overflow: hidden;" id="windowconsultaContent">
    
    <form action="./php/cach_crud.php" method="POST">
         <div class="row">
        <div class="col-lg-4">RFC</div>
        <div class="col-lg-8"><input type="text" name="rfcNuevo" id="rfcNuevo"/></div>
    </div>
     <div class="espacio1x"></div> 
    <div class="row">
        <div class="col-lg-4">Principal Name</div>
        <div class="col-lg-8"><input type="text" id="principalNuevo" name="principalNuevo" /></div>
    </div>
     <div class="espacio1x"></div> 
    <div class="row">
        <div class="col-lg-4">Business Name</div>
        <div class="col-lg-8"><input type="text" id="businessNuevo" name="businessNuevo" /></div>
    </div>
     <div class="espacio1x"></div> 
    <div class="row">
        <div class="col-lg-4">Phone</div>
        <div class="col-lg-8"><input id="phoneNuevo" type="number" name="phoneNuevo" required/> </div>
    </div>
     <div class="espacio1x"></div>
    <div class="row">
        <div class="col-lg-4">Email</div>
        <div class="col-lg-8"><input type="email" id="emailNuevo" name="emailNuevo" required/></div>
        <input type="text" id="pass" name="guardar" value="guardar" style="display:none" />
    </div>
     <div class="espacio1x"></div> 
        <input type="submit" id='guardar'>
       <!-- <input type="button" value="Guardar" id='guardar'/> -->
    </form>
    </div>    
</div>

<div id="windowEditar" style="overflow: hidden;">
    <div id="windowEditarHeader">Editar </div>
    <div style="overflow: hidden;" id="windowEditarContent">
    
    <form action="./php/cach_crud.php" method="POST">
         <div class="row">
        <div class="col-lg-4">RFC</div>
        <div class="col-lg-8"><input type="text" name="rfcEditar" id="rfcEditar"/></div>
    </div>
     <div class="espacio1x"></div> 
    <div class="row">
        <div class="col-lg-4">Principal Name</div>
        <div class="col-lg-8"><input type="text" id="principalEditar" name="principalEditar" /></div>
    </div>
     <div class="espacio1x"></div> 
    <div class="row">
        <div class="col-lg-4">Business Name</div>
        <div class="col-lg-8"><input type="text" id="businessEditar" name="businessEditar" /></div>
    </div>
     <div class="espacio1x"></div> 
    <div class="row">
        <div class="col-lg-4">Phone</div>
        <div class="col-lg-8"><input id="phoneEditar" type="number" name="phoneEditar" required/> </div>
    </div>
     <div class="espacio1x"></div>
    <div class="row">
        <div class="col-lg-4">Email</div>
        <div class="col-lg-8"><input type="email" id="emailEditar" name="emailEditar" required/></div>
        <input type="text" id="pass" name="update" value="update" style="display:none" />
        <input type="text" id="idregistros" name="idregistros" value="" style="display:none" />
    </div>
     <div class="espacio1x"></div> 
        <input type="submit" value="Actualizar" id='actualizar'>
    </form>
    </div>    
</div>

<div id="windowEliminar" style="overflow: hidden;">
    <div id="windowEliminarHeader">Editar </div>
    <div style="overflow: hidden;" id="windowEliminarContent">
    <form action="./php/cach_crud.php" method="POST">
         <div class="row">
           <div class="col-lg-1"></div>
           <div class="col-lg-10">
                <center><h3>Esta Seguro de borrar el Siguiente registro con los sig. Datos?</h3></center>
            <h4>RFC:<div id="rfcMostrarBorrar"></div></h4>
            <h4>Business Name:<div id="businessMostrarBorrar"></div></h4>
            <h4>Email:<div id="emailMostrarBorrar"></div></h4>
           </div>
            
            
         </div>
     <div class="espacio1x"></div> 
       <input type="text" id="idregEliminar" name="idregEliminar" value="" style="display:none" />
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
           <input type="text" id="pass" name="delete" value="delete" style="display:none" />
            <input type="submit" value="Eliminar" id='eliminarreg'>   
        </div>
        
    </form>
    </div>    
</div>





<div class="loading"><img src="images/Procesando-Datos2.gif"/></div>

</body>
</html>
<?php 
//}
//else{
//    header("Location: ./salir.php");
//    exit;
//}
    ?>




