package com.highradius.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DeleteInvoice
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
					
					
					String SerialIndex = request.getParameter("sl_no");
					int serial = Integer.parseInt(SerialIndex);
					
					
					Connection con = DatabaseCon.createConnect();
					String query = "UPDATE winter_internship SET is_deleted =1 WHERE sl_no=?";
					
		
						PreparedStatement st = con.prepareStatement(query);
						st.setInt(1, serial);
						st.executeUpdate();
						con.close();
					
					
			}
				catch(Exception e) {
					
				}
	}

}